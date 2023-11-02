# Registration test report

### Summary of the Issue:

The automated test for user registration is consistently failing at the point of form submission. The server is returning a 400 Bad Request status, and the user receives an alert stating "There was a problem creating your account."

### Steps to Reproduce:

1. Load the index page.
2. Ensure the registration modal is visible.
3. Fill in the registration form with the following details:
   - Name: Exampel
   - Email: Exampel@noroff.no
   - Password: Password1234
   - Avatar URL: http://example.com/avatar.jpg
4. Click the 'Create Profile' button.
5. Observe the 400 Bad Request response and the alert message.

### Cypress Test Output:

- (fetch) POST 400 https://nf-api.onrender.com/api/v1/social/auth/register
- (alert) There was a problem creating your account
