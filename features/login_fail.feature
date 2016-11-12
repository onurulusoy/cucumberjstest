#encoding: UTF-8
@loginFail_tests
Feature: Example feature
  As a user of etkinlikcim
  I want to login
  So that I can see my full name on the header

    Background:
      Given I am on the etkinlikcim login page

      @fail_login1
  Scenario: Fail Login1
    When I see GIRIS YAP
    Then I write my E-Mail "ulusoyonur@yahoo.com"
    Then I click Login Button
    Then I should see the error message
      |ŞIFRE KISMI BOŞ OLAMAZ|

      @fail_login2
  Scenario: Fail Login2
    When I see GIRIS YAP
    Then I write my Password "mahmut123"
    Then I click Login Button
    Then I should see the error message
        |LÜTFEN BIR EPOSTA ADRESI GIRINIZ|

      @fail_login3
  Scenario: Fail Login3
    When I see GIRIS YAP
    Then I click Login Button
    And I should see the error message
      |LÜTFEN BIR EPOSTA ADRESI GIRINIZ|ŞIFRE KISMI BOŞ OLAMAZ|