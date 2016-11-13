// features/step_definitions/browser_steps.js
var seleniumWebdriver = require('selenium-webdriver');
var async = require('async');

var By = seleniumWebdriver.By;

const assert = require('assert');

module.exports = function () {
    this.Given(/^I am on the etkinlikcim login page$/, function () {
        return this.driver.get('http://etkinlikcim-new-design.eu-west-1.elasticbeanstalk.com/giris');
    });

    this.When(/^I see GIRIS YAP$/, function () {
        return this.driver.findElement(By.className('center')).then(function (element) {
            return element;
        });
    });

    this.Then(/^I write my E-Mail "([^"]*)"$/, function (text) {
        return this.driver.findElement(By.name('email')).then(function (element) {
            return element.sendKeys(text);
        });
    });

    this.Then(/^I write my Password "([^"]*)"$/, function (text) {
        return this.driver.findElement(By.name('password')).then(function (element) {
            return element.sendKeys(text);
        });
    });

    this.Then(/^I click Login Button/, function () {
        return this.driver.findElement(By.id('loginButton')).then(function (element) {
            return element.click();
        });
    });

    this.Then(/^I should see the error message$/, function (errorMessages) {
        var expected = [];
        expected[0] = [];
        promise = this.driver.findElements(By.className('help-block error'));
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
                    assert.deepEqual(errorMessages.raw(), expected)
                }
            });
        });
    });

};