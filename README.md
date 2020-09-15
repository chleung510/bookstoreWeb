# bookstoreWeb
A bookstore website.

- Fixed a few typo in codes.
  - Users can only browse home screen when exact route is entered.
  - Redux store should now be detected by Redux extension of the browser,
    and types of actions and changes in states are now viewable.
- Inventory availability of each product is now from backend.
  - Buyers can only add amount smaller than or equals to maximum amount of inventory to cart from      product page.
  - Status of inventory will be displayed as "Out of Stock" if inventory is out. 
