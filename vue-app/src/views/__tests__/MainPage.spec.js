import {shallowMount} from "@vue/test-utils";
import MainPage from "../MainPage";
import API from "@/api";

jest.mock('@/api')

describe("MainPage.vue", () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallowMount(MainPage)
    })
    it("sanity test", () => {
        expect(true).toBeTruthy()
    })
    it("should video list container ", () => {
        expect(wrapper.find("#video-list-container").exists()).toBeTruthy()
    })
    it("should component exist", () => {
        API.getVideoList.mockResolvedValue([])
        expect(wrapper.exists()).toBeTruthy()
    })
})