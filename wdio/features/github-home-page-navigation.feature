@all
@navigation
Feature: Github Home Page Navigation

    Background:
        Given the User opens web page "https://github.com"

    @text-verify
    Scenario Outline: Verify the link <Index> inner text contains "<Text>"
        When the User scrolls to navigation links
        Then the User sees that the text of the link <Index> contains "<Text>"

        Examples:
            | Text        | Index |
            | Code        | 1     |
            | Collaborate | 2     |
            | Develop     | 3     |
            | Automate    | 4     |
            | Secure      | 5     |
            | Community   | 6     |

    @sign-in-redirection
    Scenario: Redirect to sign-in page
        When the User scrolls to header
        And the User clicks on "Sign In" button
        Then the User is redirected to sign-in page