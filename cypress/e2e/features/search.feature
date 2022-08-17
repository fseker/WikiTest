Feature: Search Functionality

    Background:
        Given I open the wikipedia page
        When I click on search button

    Scenario: Check Default Values on Search Page
        Then I verify banner
        And  'Sort by relevance' and '(Article)' selected by default

    Scenario: Check No Result
        And I enter search term 'xyzasd' and search
        Then I see "There were no results matching the query." message

    Scenario Outline: Check Search Results Match rate > given limit
        When I enter search term '<SearchTerm>' and search
        Then I verify result match rate above % <SuccessRate>
        Examples:
            | SearchTerm     | SuccessRate |
            | climate change | 90          |