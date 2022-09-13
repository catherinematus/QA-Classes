@all
@header
Feature: Github Header Links

    Background:
        Given the User opens "Home" page via url

    @hover-on-links
    Scenario: Hover on navigation links
        Then the User doesn't see "Features" drop down in the page header of "Home" page
        Then the User doesn't see "Explore" drop down in the page header of "Home" page
        Then the User doesn't see "Pricing" drop down in the page header of "Home" page
        When the User hovers on "Product" navigation link in the page header of "Home" page
        Then the User sees "Features" drop down in the page header of "Home" page
        When the User clicks on "Product" navigation link in the page header of "Home" page
        And the User hovers on "Explore" navigation link in the page header of "Home" page
        Then the User sees "Explore" drop down in the page header of "Home" page
        When the User clicks on "Explore" navigation link in the page header of "Home" page
        And the User hovers on "Pricing" navigation link in the page header of "Home" page
        Then the User sees "Pricing" drop down in the page header of "Home" page

    @sign-in-button
    Scenario: Redirection from "Home" page
        When the User clicks on "Sign In" button in the page header of "Home" page
        Then the User is on "Login" page
        When the User goes back in the browser
        Then the User is on "Home" page

    @navigation-links
    Scenario Outline: Redirection from "Home" page after click on "<link_name>"
        When the User clicks on "<link_name>" navigation link in the page header of "Home" page
        Then the User is redirected from "Home" page
        When the User goes back in the browser
        Then the User is on "Home" page

        Examples:
            | link_name   |
            | Team        |
            | Enterprise  |
            | Marketplace |
