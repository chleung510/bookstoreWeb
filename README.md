# bookstoreWeb
A bookstore website.

- Product Management page is added.
  -  Products are saved into database and being managed by MongoDB.
  -  Only users with valid token and Administrator role could add/delete/edit the products, users will be prompted to sign in when they try to access these privilege functions to verify their identity.
  - To access the Product Management page, users can access through the temperary profile page. User can access the profile page by clicking their user name at the right corner of the page.
  -  Some of the routes originally at server.js were replaced by the routes at productRoute.js to serve the purpose of creating, deleting and editing the products saved at the database. 

- Temperary User Profile page is added.
  - After user log in, user can browse their profile page by pressing the button with their user name.
  - User with privilege group(s) can access product management page by using the link at the bottom of the page.
