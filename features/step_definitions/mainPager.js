/**
 * Created by onurulu on 9.11.2016.
 */
var seleniumWebdriver = require('selenium-webdriver');
var async = require('async');
var https = require('https');
//var request = require('request');
var request = require('sync-request');

var By = seleniumWebdriver.By;

const assert = require('assert');

module.exports = function () {

    this.Given(/^I am on the etkinlikcim main page$/, function () {
        return this.driver.get('http://etkinlikcim-new-design.eu-west-1.elasticbeanstalk.com/');
    });

    this.When(/^I see -Create free activity- link$/, function () {
        return this.driver.findElement(By.className('waves-effect waves-light btn yellow-button center-block modal-trigger home-overlay-button')).then(function (element) {
            return element;
        });
    });

    this.Then(/^I click -Create free activity-$/, function () {
        return this.driver.findElement(By.className('waves-effect waves-light btn yellow-button center-block modal-trigger home-overlay-button')).then(function (element) {
            return element.click();
        });
    });

    this.Then(/^I should see all home activities$/, function (activities) {
        var expected = [];
        expected[0] = [];
        promise = this.driver.findElements(By.className('col s6 m4 l4'));
        promise.then(function (elements) {
            async.eachSeries(elements, function (element, callback) {
                element.getText().then(function (text) {
                    expected[0].push(text);
                    callback();
                });
            }, function (err) {
                if (err) {
                    console.error(err);
                } else {
                    assert.deepEqual(activities.raw(), expected)
                }
            });
        });
    });

    this.Then(/^I should see all modal activities$/, function (activities) {
        var expected = [];
        expected[0] = [];
        promise = this.driver.findElements(By.className('col s12 m6 l3'));
        promise.then(function (elements) {
            async.eachSeries(elements, function (element, callback) {
                element.getText().then(function (text) {
                    expected[0].push(text);
                    callback();
                });
            }, function (err) {
                if (err) {
                    console.error(err);
                } else {
                    assert.deepEqual(activities.raw(), expected)
                }
            });
        });
    });

    this.Then(/^I should see all images on the page$/, function () {
        promise = this.driver.findElements(By.className('cld-responsive'));
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