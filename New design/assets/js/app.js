'use strict';

 
// Cart constructor.
var Cart = function(items) {
  // this.items is an array of CartItem instances.
  this.items = items;
};

Cart.prototype.addItem = function(product, quantity, img, price) {
  // TODO: Fill in this instance method to create a new CartItem and add it to this.items
  this.items.push(new CartItem(product, quantity, img, price));
  console.log(this.items);
};

Cart.prototype.saveToLocalStorage = function() {
  console.log("this >> "+this.items);
  // TODO: Fill in this instance method to save the contents of the cart to localStorage
  // console.log(JSON.stringify(cart.items));
  // console.log(JSON.parse(JSON.stringify(cart.items)));
  // Get the existing data 
  var existing = localStorage.getItem('cart') || [];
  // If no existing data, create an array
  // Otherwise, convert the localStorage string to an array 
  //existing = existing ? existing.split(',') : [];
  // Add new data to localStorage Array 
  existing.push(this.items);

  // Save back to localStorage 
  localStorage.setItem('cart', JSON.stringify(existing));
console.log("this222 >> "+this.items);
  //localStorage.setItem('cart', JSON.stringify(this.items));
  console.log(localStorage.getItem('cart'));
};

Cart.prototype.removeItem = function(item) {
  // TODO: Fill in this instance method to remove one item from the cart.
  // Note: You will have to decide what kind of parameter to pass in here!
  this.items.splice(item, 1);
};

var CartItem = function(product, quantity, img, price) {
  this.product = product;
  this.quantity = quantity;
  this.img = img;
  this.price = price;
};

 

// UsersReview constructorr
var UserReview = function(id, name, reviewText, imgPath) {
  this.id = id;
  this.name = name;
  this.reviewText = reviewText;
  this.imgPath = imgPath;
  UserReview.allReviews.push(this);
};
UserReview.allReviews = [];

function generateReview() {
  new UserReview(1, 'Waleed Afifi', 'This is awesome. You can find what ever you need in here!', 'assets/dp1.jpg');
  new UserReview(1, 'Waleed Afifi', 'This is awesome. You can find what ever you need in here!', 'assets/dp2.jpg');
  new UserReview(1, 'Waleed Afifi', 'This is awesome. You can find what ever you need in here!', 'assets/dp3.jpg');
  new UserReview(1, 'Waleed Afifi', 'This is awesome. You can find what ever you need in here!', 'assets/dp4.jpg');

}

// Slider constructor
var Slider = function(id, filePath) {
  this.id = id;
  this.filePath = filePath;
  Slider.allSliders.push(this);
};
Slider.allSliders = [];

function generateSlider() {
  new Slider(1, 'https://cdn.wallpapersafari.com/87/75/ISOa0Y.jpg');
  new Slider(2, 'https://i.pinimg.com/originals/da/a9/1a/daa91af5de4dac9a8e7582f7a66433ee.jpg');
  new Slider(3, 'https://i.redd.it/f3cz8qx6k9t21.png');
}

// Product contructor.
var Product = function(id, filePath, name, price, details) {
  this.id = id;
  this.filePath = filePath;
  this.name = name;
  this.price = price;
  this.details = details;
  Product.allProducts.push(this);
};
Product.allProducts = [];

function generateCatalog() {
  new Product(1,'assets/bag.jpg', 'Bag', 22, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio iusto fuga repellendus reiciendis aliquam animi ad sunt fugit cupiditate! Quae dolorem dicta laudantium iure tenetur fugit error nesciunt! Recusandae, illo!');
  new Product(2,'assets/banana.jpg', 'Banana', 22, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio iusto fuga repellendus reiciendis aliquam animi ad sunt fugit cupiditate! Quae dolorem dicta laudantium iure tenetur fugit error nesciunt! Recusandae, illo!');
  new Product(3,'assets/bathroom.jpg', 'Bathroom', 22, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio iusto fuga repellendus reiciendis aliquam animi ad sunt fugit cupiditate! Quae dolorem dicta laudantium iure tenetur fugit error nesciunt! Recusandae, illo!');
  new Product(4,'assets/boots.jpg', 'Boots', 22, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio iusto fuga repellendus reiciendis aliquam animi ad sunt fugit cupiditate! Quae dolorem dicta laudantium iure tenetur fugit error nesciunt! Recusandae, illo!');
  new Product(5,'assets/breakfast.jpg', 'Breakfast', 22, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio iusto fuga repellendus reiciendis aliquam animi ad sunt fugit cupiditate! Quae dolorem dicta laudantium iure tenetur fugit error nesciunt! Recusandae, illo!');
  new Product(6,'assets/bubblegum.jpg', 'Bubblegum', 22, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio iusto fuga repellendus reiciendis aliquam animi ad sunt fugit cupiditate! Quae dolorem dicta laudantium iure tenetur fugit error nesciunt! Recusandae, illo!');
  new Product(7,'assets/chair.jpg', 'Chair', 22, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio iusto fuga repellendus reiciendis aliquam animi ad sunt fugit cupiditate! Quae dolorem dicta laudantium iure tenetur fugit error nesciunt! Recusandae, illo!');
  new Product(8,'assets/cthulhu.jpg', 'Cthulhu', 22, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio iusto fuga repellendus reiciendis aliquam animi ad sunt fugit cupiditate! Quae dolorem dicta laudantium iure tenetur fugit error nesciunt! Recusandae, illo!');
  new Product(9,'assets/dog-duck.jpg', 'Dog-Duck', 22, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio iusto fuga repellendus reiciendis aliquam animi ad sunt fugit cupiditate! Quae dolorem dicta laudantium iure tenetur fugit error nesciunt! Recusandae, illo!');
  new Product(10,'assets/dragon.jpg', 'Dragon', 22, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio iusto fuga repellendus reiciendis aliquam animi ad sunt fugit cupiditate! Quae dolorem dicta laudantium iure tenetur fugit error nesciunt! Recusandae, illo!');
  new Product(11,'assets/pen.jpg', 'Pen', 22, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio iusto fuga repellendus reiciendis aliquam animi ad sunt fugit cupiditate! Quae dolorem dicta laudantium iure tenetur fugit error nesciunt! Recusandae, illo!');
  new Product(12,'assets/pet-sweep.jpg', 'Pet Sweep', 22, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio iusto fuga repellendus reiciendis aliquam animi ad sunt fugit cupiditate! Quae dolorem dicta laudantium iure tenetur fugit error nesciunt! Recusandae, illo!');
  new Product(13,'assets/scissors.jpg', 'Scissors', 22, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio iusto fuga repellendus reiciendis aliquam animi ad sunt fugit cupiditate! Quae dolorem dicta laudantium iure tenetur fugit error nesciunt! Recusandae, illo');
  new Product(14,'assets/shark.jpg', 'Shark', 22, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio iusto fuga repellendus reiciendis aliquam animi ad sunt fugit cupiditate! Quae dolorem dicta laudantium iure tenetur fugit error nesciunt! Recusandae, illo!');
  new Product(15,'assets/sweep.png', 'Sweep', 22, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio iusto fuga repellendus reiciendis aliquam animi ad sunt fugit cupiditate! Quae dolorem dicta laudantium iure tenetur fugit error nesciunt! Recusandae, illo!');
  new Product(16,'assets/tauntaun.jpg', 'Taun-Taun', 22, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio iusto fuga repellendus reiciendis aliquam animi ad sunt fugit cupiditate! Quae dolorem dicta laudantium iure tenetur fugit error nesciunt! Recusandae, illo');
  new Product(17,'assets/unicorn.jpg', 'Unicorn', 22, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio iusto fuga repellendus reiciendis aliquam animi ad sunt fugit cupiditate! Quae dolorem dicta laudantium iure tenetur fugit error nesciunt! Recusandae, illo');
  new Product(18,'assets/usb.gif', 'USB', 22, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio iusto fuga repellendus reiciendis aliquam animi ad sunt fugit cupiditate! Quae dolorem dicta laudantium iure tenetur fugit error nesciunt! Recusandae, illo');
  new Product(19,'assets/water-can.jpg', 'Water Can', 22, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio iusto fuga repellendus reiciendis aliquam animi ad sunt fugit cupiditate! Quae dolorem dicta laudantium iure tenetur fugit error nesciunt! Recusandae, illo!');
  new Product(20,'assets/wine-glass.jpg', 'Wine Glass', 22, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio iusto fuga repellendus reiciendis aliquam animi ad sunt fugit cupiditate! Quae dolorem dicta laudantium iure tenetur fugit error nesciunt! Recusandae, illo!');
}



// Initialize the app by creating the big list of products with images and names
generateSlider();
generateCatalog();
generateReview();
console.log(Slider.allSliders);
console.log(Product.allProducts);