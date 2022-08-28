@all
@login
Feature: Github login process

    Background:
        Given the User opens web page "https://github.com/login"

    @forgot-password
    Scenario: Forgot password
        When the User clicks on "Forgot password" link
        Then the User is on the password reset page

    @invalid-username
    Scenario: Invalid username
        When the User logs in with invalid username of 10 symbols length
        Then the User sees invalid credentials error message

    @invalid-password
    Scenario: Invalid password
        When the User logs in with invalid password of 9 symbols length
        Then the User sees invalid credentials error message

    @valid-credentials
    Scenario: Valid credentials
        When the User logs in with valid credentials
        Then the User is redirected from sign-in page