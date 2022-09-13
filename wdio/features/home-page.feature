@all
@navigation
Feature: Github Home Page Navigation

    Background:
        Given the User opens "Home" page via url

    @text-verify
    Scenario: Verify the navigation links inner text
        Then the User sees that the text of the navigation links on the "Home" page is "Code, Collaborate, Develop, Automate, Secure, Community"
