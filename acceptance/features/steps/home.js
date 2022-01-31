const {Given, When, Then} = require("cucumber");
const openUrl = require("../support/action/openUrl");
const waitForSelector = require("../support/action/waitForSelector")
const assert = require("assert");
const checkUrlContains = require("../support/check/checkUrlContains")


Given(/^that User goes to Video Site Project's HomePage$/, async function () {
    await openUrl.call(this, "/")
});
When(/^page is loaded$/, async function () {
    await waitForSelector.call(this, ".main")
});
Then(/^User can see some of videos' title like$/, async function (videoArray) {
    const selector = ".video-container"

    for (let [videoTitle] of videoArray.rawTable) {
        let check = await this.page.$$eval(selector, async (items, videoTitle) => {
            const video = items.find(item => item.querySelector("#title").textContent.includes(videoTitle))
            return !!video
        }, videoTitle)
        assert.strictEqual(check, true)
    }
});
Given(/^that User is on Video Site Project's HomePage$/, async function () {
    await openUrl.call(this, "/")
});
When(/^User clicks "([^"]*)" video$/, async function (videoTitle) {
    const selector = ".video-container"
    await this.page.$$eval(selector, async (items, videoTitle) => {
        const video = items.find(item => item.querySelector("#title").textContent.includes(videoTitle))
        await video.querySelector(".image").click()
    }, videoTitle)
});
Then(/^User should see watch url correctly$/, async function () {
    await this.page.waitForTimeout(3000)
    await checkUrlContains.call(this, false, "/watch?id=2")
});
When(/^User hovers "([^"]*)" video$/, async function (videoTitle) {
    const imageItems = await this.page.$$('.video-container');
    for (let image of imageItems) {
        let videoNameNode = await image.$("#title");
        const videoNameText = await this.page.evaluate(videoNameNode => videoNameNode.textContent, videoNameNode);
        if (videoNameText === videoTitle) {
            await image.hover();
            return !!videoNameText
        }
    }
    assert.strictEqual(imageItems, true)
});
Then(/^User should see hovered image$/, async function () {
    await this.page.waitForTimeout(3000)
});