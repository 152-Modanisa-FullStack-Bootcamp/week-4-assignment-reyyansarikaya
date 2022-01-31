import {pactWith} from 'jest-pact';
import { Matchers } from '@pact-foundation/pact';
const { eachLike, like } = Matchers
import {API} from "@/api";

pactWith({
    consumer: "Frontend",
    provider: "Backend",
}, provider => {
    describe("videos", () => {
        let api
        beforeEach(() => {
            api = new API(provider.mockService.baseUrl)
        })
        test('get product list', async () => {
            console.log(provider)
            await provider.addInteraction({
                state: 'get product list successfully',
                uponReceiving: 'a request not empty for product list',
                withRequest: {
                    method: 'GET',
                    path: '/videos',
                },
                willRespondWith: {
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json; charset=UTF-8',
                    },
                    body: eachLike({
                        id: like(1),
                        name: like("tavin"),
                        description: like('tavin marka kıyafet'),
                        image: like('https://fns.modanisa.com/r/pro2/2021/11/01/n-desenli-mevlana-elbise-tsd4414-turuncu-8067476-7.jpg')
                    })
                }
            })
            const res = await api.getVideoList()
            expect(res[0].id).toEqual(1)
        })
    })
})