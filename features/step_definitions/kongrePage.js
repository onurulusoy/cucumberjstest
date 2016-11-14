var seleniumWebdriver = require('selenium-webdriver');
var async = require('async');
var https = require('https');
var request = require('sync-request');

var By = seleniumWebdriver.By;

const assert = require('assert');

module.exports = function () {

    this.Given(/^I am on the Planning Activity for Kongre Page$/, function () {
        return this.driver.get('http://etkinlikcim-new-design.eu-west-1.elasticbeanstalk.com/etkinlik-planlama/kongre');
    });

    this.Then(/^I see all needs for kongre$/, function () {
        var condition = seleniumWebdriver.until.elementLocated(By.className("services-content"));
        return this.driver.wait(condition, 5000);
    });

    this.Then(/^I should see pictures of needs for kongre$/, function () {
        promise = this.driver.findElements(By.className('image_picker_image cld-responsive'));
        promise.then(function (imageElements) {
            async.eachSeries(imageElements, function (imageElement, callback) {
                imageElement.getAttribute("src").then(function (imageLink) {
                    var res = request('GET', imageLink);
                    assert.strictEqual(res.statusCode, 200);
                    callback();
                });
            }, function (err) {
                if (err){
                    console.error(err);
                }
            });
        });
    });

    this.Then('I select "$selection"', function (selection) {
        return this.driver.findElement(By.id(selection)).then(function (element) {
            return element.click();
        });
    });

    this.Then('I should see that the "$selection" is selected', function (selection) {
        var xpath = ".//*[@id='" + selection + "'][@class='thumbnail selected']";
        var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
        return this.driver.wait(condition, 5000);
        });

    this.Then(/^I click Create Activity button$/, function () {
        return this.driver.findElement(By.id("createEventButton")).then(function (element) {
            return element.click();
        });
    });

    this.Then(/^I should see all small images on loaded page for selection/, function () {
        promise = this.driver.findElements(By.className('cld-responsive box-image-small'));
        promise.then(function (imageElements) {
            async.eachSeries(imageElements, function (imageElement, callback) {
                imageElement.getAttribute("src").then(function (imageLink) {
                    var res = request('GET', imageLink);
                    assert.strictEqual(res.statusCode, 200);
                    callback();
                });
            }, function (err) {
                if (err){
                    console.error(err);
                }
            });
        });
    });

};