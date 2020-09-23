# bookstoreWeb
A bookstore website.

- Items that added to cart(and any changes made at cart page) are now saved to Cookie.
  - items will be remained when the page is refreshed.
  - Redux store will now attempt to get items that added to cart(saved to Cookie) or
    make the cart empty by default if nothing is saved.

- At cart page, shoppers can browse product details by clicking title of the product.
