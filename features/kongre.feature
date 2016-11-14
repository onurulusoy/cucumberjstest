#encoding: UTF-8
@Kongre_tests
Feature: Kongre Feature
  As a guest on etkinlikcim
  I want to plan activity for Kongre
  So that I can see the needs for Kongre and select them in the direction of my needs

  Background:
    Given I am on the Planning Activity for Kongre Page

  @KongreSevices
  Scenario: Kongre Activity Checking
    When I see all needs for kongre
    And I should see pictures of needs for kongre
    Then I select "sahne-dekor-firmalari"
    Then I should see that the "sahne-dekor-firmalari" is selected

  @KongreSevices_CreateKongre
  Scenario: Kongre Activity Creating
    When I see all needs for kongre
    Then I select "sahne-dekor-firmalari"
    Then I click Create Activity button
    Then I should see all small images on loaded page for selection