@all
@header
Feature: Github Header Links

    Background:
        Given the User opens "Home" page via url

    @links-click
    Scenario: Navigation links click
        Then the User doesn't see "Product" drop down in the page header of "Home" page
        Then the User doesn't see "Solutions" drop down in the page header of "Home" page
        Then the User doesn't see "Open Source" drop down in the page header of "Home" page
        When the User clicks on "Product" navigation link in the page header of "Home" page
        Then the User sees "Product" drop down in the page header of "Home" page
        When the User clicks on "Solutions" navigation link in the page header of "Home" page
        Then the User sees "Solutions" drop down in the page header of "Home" page
        When the User clicks on "Open Source" navigation link in the page header of "Home" page
        Then the User sees "Open Source" drop down in the page header of "Home" page

    @sign-in-button
    Scenario: Redirection from "Home" page
        When the User clicks on "Sign In" button in the page header of "Home" page
        Then the User is on "Login" page
        When the User goes back in the browser
        Then the User is on "Home" page

    @navigation-links
    Scenario: Redirection from "Home" page after click on "Pricing"
        When the User clicks on "Pricing" navigation link in the page header of "Home" page
        Then the User is redirected from "Home" page
        When the User goes back in the browser
        Then the User is on "Home" page
