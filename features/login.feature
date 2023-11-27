Feature: Modifying Text Widgets on the Lesson page

  Scenario: Add Text widget and modify it in Lesson

    Given I am on the Learn Page
    When I click on Course button
    Then the list of lessons should be displayed
    When I click on Lesson
    And I click on the + button
    Then the various widgets should be displayed
    When I choose Text widget
    Then the screen is scrolled down where widget was added
    When I tap to add text
    And enter the random text
    Then the text that is being written is visible on the screen
    When I click on created text
    Then the modifications should be displayed
    When I apply all modifications on the text
    Then changes should be saved immediately
