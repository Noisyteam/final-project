# Handy website

## Noisy Team

### Wireframe
[Wireframe design](https://s3.amazonaws.com/assets.mockflow.com/app/wireframepro/fileexport/Export_D6f8f08bfbe735d27992ff35e2d282c28.pdf)

### User Stories
1. As a user I want to see trending product at home page.
1. As a user I want to see new products at home page.
1. As a user I want to subscribe my email to get new offers, products on the website.
1. As a user I want to see item numbers inside the cart.
1. As a user I want see product colors and add product quantity from product details page.
1. As a user I want to remove items that I don’t need them anymore
1. As a user I want to see the team behind this website.


### Domain modeling

**Product**
  id: integer
  filePath: String
  name: String
  price: number
  details: String
  allProducts: Array
    _Function_ ( none ) 

**CartItem**
  product: String
  quantity: integer
  img: String
  price: number
    _Function_ ( none )

**Cart**
  items
    _Function_ ( 
        addItem(product, quantity, img, price), 
        saveToLocalStorage, 
        removeItem 
    )

**UserReview**
  id: Intdger
  name: String
  reviewText: Strirng
  imgPath: String
  allReview: Array

**Slider**
  id: Intger
  filePath: Striing
  allSliders: Array

### Relations
Cart => CartItem ( One to Many )
Product => CartItem ( One to One )



### Vision
Find things you'll love. Support independent sellers. Only on Handy.

### Problem Solving
Do things you love and start selling online

### Why should you car about our project
Our website will let people do their favorite hobby as a new job opportunity


### Scope in
1. The web app will provide a plateform for people to sell their products.
2. The web app wiil provide a platform for people to buy a Hand made products.
3. The platform can be used easily, with few clicks.
4. The web app will provide attractive product display.


### Scope out
1. This app will never have a delivery service


### Minimum Viable Product
This app will let use explore new, featured products, and users can subscribe to the newsletter, users can browse product details, the users can add/remove products to cart, the users can see the team behind this website and contact them, the seller can add product to sell.


### Functional Requirements
1. A user can add product to start selling
2. A user can add/remove product to cart
3. A user can enter email to subscribe to the newsletter
4. A user can press on product to view it details