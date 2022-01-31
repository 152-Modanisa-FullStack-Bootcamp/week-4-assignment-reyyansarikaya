import {shallowMount} from "@vue/test-utils";
import Video from "../Video";

describe("Video.vue", () => {
    it("sanity test", () => {
        expect(true).toBeTruthy()
    })
    describe("exists check", () => {
        let wrapper
        beforeEach(() => {
            wrapper = shallowMount(Video, {
                propsData: {
                    video: {}
                },
                mocks: {
                    $route: {
                        params: []
                    }
                }
            })
        })
        it("should component exists", () => {
            expect(wrapper.exists()).toBeTruthy()
        })
        it("should render product img", () => {
            const img = wrapper.find('img')
            expect(img.exists()).toBeTruthy()
        })
        it("should render product title", () => {
            const title = wrapper.find("#title")
            expect(title.exists()).toBeTruthy()
        })

        describe("check video image change", () => {
            const video = {
                "id": 1,
                "videoAddress": "https://www.youtube.com/watch?v=FXpIoQ_rT_c",
                "coverImage": "https://raw.githubusercontent.com/modanisa/bootcamp-video-db/main/video-images/1-cover.webp",
                "hoverImage": "https://raw.githubusercontent.com/modanisa/bootcamp-video-db/main/video-images/1-hover.webp",
                "title": "Vue.js Course for Beginners [2021 Tutorial]",
                "viewCount": 254,
                "publishDateInMonth": 4,
                "ownerImage": "https://yt3.ggpht.com/ytc/AKedOLTtJvQ1Vfew91vemeLaLdhjOwGx3tTBLlreK_QUyA=s68-c-k-c0x00ffffff-no-rj",
                "ownerName": "freeCodeCamp.org",
                "description": "Learn Vue 3 by in this full course. Vue.js is an open-source model–view–view model front end JavaScript framework for building user interfaces and single-page applications."
            }
            let wrapper
            beforeEach(() => {
                wrapper = shallowMount(Video, {
                    propsData: {
                        video,
                        ishover: false
                    },
                    mocks: {
                        $route: {
                            params: []
                        }
                    }
                })
            })
            it("should change when the video image is hovered", async () => {
                const image = wrapper.find('img')
                await image.trigger("mouseover")
                expect(image.attributes().src).toEqual(video.hoverImage)
            })

            it("should chanfe when the video image is mouse leaved", async () => {
                const image = wrapper.find("img")
                await image.trigger("mouseleave")
                expect(image.attributes().src).toEqual(video.coverImage)

            })
        })

    })
})