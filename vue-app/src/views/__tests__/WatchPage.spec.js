import {shallowMount} from "@vue/test-utils";
import WatchPage from "../WatchPage";

describe("WatchPage.vue", ()=>{
    it("sanity test",()=>{
        expect(true).toBeTruthy()
    })
    it("should h1 element exist", ()=>{
        const wrapper = shallowMount(WatchPage, {
            mocks:{
                $route:{
                    query:[]
                }
            }
        })
        expect(wrapper.find("h1").exists()).toBeTruthy()
    })
})