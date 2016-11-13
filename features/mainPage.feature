#encoding: UTF-8
@Main_Tests
Feature: Main Feature
  As a guest on etkinlikcim
  I want to see the contents and basic functionality
  So that I surf on the Pages

  Background:
    Given I am on the etkinlikcim main page

  @HomeActivities
  Scenario: Home Activity Checking
    Then I should see all home activities
      |Kongre|Seminer|Parti|Sergi|Konferans|Özel Davet|Baby Shower|Festival|Doğum Günü|

  @HomeModalActivities
  Scenario: Home Modal Activity Checking
    When I see -Create free activity- link
    Then I click -Create free activity-
    Then I should see all modal activities
      |Kongre|Seminer|Parti|Sergi|Konferans|Özel Davet|Baby Shower|Festival|Doğum Günü|Diğer|

  @HomeImages
  Scenario: Image Checking
    Then I should see all images on the page