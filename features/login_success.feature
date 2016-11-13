#encoding: UTF-8
@loginSuccess_tests
Feature: Example feature
  As a user of etkinlikcim
  I want to login
  So that I can see my full name on the header

    Background:
      Given I am on the etkinlikcim login page

      @success_login
  Scenario: Success Login
    When I see GIRIS YAP
    Then I write my E-Mail "ulusoyonur@yahoo.com"
    Then I write my Password "mahmut123"
    Then I click Login Button
    Then I should see "Onurr Ulusoy"