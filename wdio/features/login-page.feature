@all
@login
Feature: Github login process

    Background:
        Given the User opens "Login" page via url

    @forgot-password
    Scenario: Forgot password
        When the User clicks on "Forgot password" link on "Login" page
        Then the User is redirected from "Login" page
        Then the User is on "Forgot password" page

    @invalid-username
    Scenario: Invalid username
        When the User logs in with invalid username of 10 symbols length
        Then the User sees "Error" label on "Login" page

    @invalid-password
    Scenario: Invalid password
        When the User logs in with invalid password of 9 symbols length
        Then the User sees "Error" label on "Login" page with "Incorrect username or password." inner text

    @valid-credentials
    Scenario: Valid credentials
        When the User logs in with valid credentials
        Then the User is redirected from "Login" page