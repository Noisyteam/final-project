'use strict';


// Cart constructor.
var Cart = function (items) {
  // this.items is an array of CartItem instances.
  this.items = items;
};
var x=
Cart.prototype.addItem = function (product, quantity, img, price) {
  // TODO: Fill in this instance method to create a new CartItem and add it to this.items
  x=new CartItem(product, quantity, img, price);
  this.items.push(x);  
 // console.log(this.items);
};

Cart.prototype.saveToLocalStorage = function () {

 
//   console.log(localStorage.getItem('cart'));
//   var stored=localStorage.getItem('cart')||[];
//  // stored.push(this.items);
//   console.log('item',this.items);
 localStorage.setItem('cart', JSON.stringify(this.items)); 
 // console.log(stored);
};

Cart.prototype.removeItem = function (item) {
  // TODO: Fill in this instance method to remove one item from the cart.
  // Note: You will have to decide what kind of parameter to pass in here!
  this.items.splice(item, 1);
};

var CartItem = function (product, quantity, img, price) {
  this.product = product;
  this.quantity = quantity;
  this.img = img;
  this.price = price;
};



// UsersReview constructorr
var UserReview = function (id, name, reviewText, imgPath) {
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
var Slider = function (id, filePath) {
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
var Product = function (id, filePath, name, price, details) {
  this.id = id;
  this.filePath = filePath;
  this.name = name;
  this.price = price;
  this.details = details;
  Product.allProducts.push(this);
};
Product.allProducts = [];

function generateCatalog() {
  new Product(1, 'images/KidsSoap.jpg', 'Colorful Kids Soap', 22, 'The fruity smells of oils will be particularly appealing to kids: GREEN APPLE, STRAWBERRY, RASPBERRY, AND SWEET ORANGETHIS IS A FABULOUS GIFT IDEA FOR ANY OCCASION Kids will love these and it would have the added advantage of them wanting to wash their hands more often');
  new Product(2, 'images/Ladias.jpg', 'Ladies Bud Vases', 22, 'Ladies Bud Vases are one of a kind, made with dedicated craftsmanship. These handmade sculptured vases are created individually, each with their own unique character. No two vases are ever the same, just like us.');
  new Product(3, 'images/GoatMilk.jpg', 'Almond Goat Milk', 22, 'Creamy almond scented goat milk soap is excellent for the complexion as well as an all-over body bar. We can never seem to make enough of it! We use locally produced fresh goat milk from Edgwick Hudson Valley goats farm. Incredibly beneficial for dry skin. 5 ounce bar');
  new Product(4, 'images/Crochet Potholder.jpg', 'Colors Crochet Potholder', 22, 'Here is a colorful crochet pot holder to brighten up your kitchen decor this Fall. This double thick hot pad is made from 100% cotton. Measures approx 9" (22cm) long by 8 1/2" (21 cm).One side has stripes in the colors of Fall, off centered onto a background of Autumn fleck. The other side are wide stripes of sage green and Autumn fleck. It is edged in a chocolate brown. It also has a crocheted hanger attached.');
  new Product(5, 'images/sunflower.jpg', 'Sunflower Hot Pad Potholder Trivet', 22, 'This colorful crocheted trivet will brighten up your kitchen counter or table. The potholder is crocheted from 100% cotton, so it is protective as well as pretty.The center of the flower is chocolate brown, and has three rows of petals in two shades of yellow. Machine washable and safe for a low heat dryer. It is approx 7 1/2" (19 cm) in diameter. Made in a smoke free environment.');
  new Product(6, 'images/CoffeeLover.jpg', 'Coffee Lover Pottery Mug', 22, 'This handmade pottery mug is the best seller of all products in my shop!<br/> NOTE: Leaves and shells may vary from those used in photograph, ensuring your order is truly one of a kind!<br/>CARE: Oven, microwave and dishwasher safe.');
  new Product(7, 'images/stamp.jpg', 'Personalised Handmade by stamp', 22, 'If you love to create and make and are planning to give your creations at Christmas or throughout the year, a personalised handmade stamp like this can really make the difference. This design is simple and understated and can be used on any handmade product. The handmade stamp includes the words "handmade by" and your own name, and makes it easy to add a lovely finishing touch to your gifts.');
  new Product(8, 'images/Rug.jpg', 'Superb Green Vintage Worn Bohemian Rug', 22, 'We offer the best quality rugs at the LOWEST possible price including free shipping to US, CA and EU. All of our rugs are guaranteed 100% handmade (unless otherwise stated) and one of kind. Please feel free to contact me if you have any questions and I’m happy to help.!');
  new Product(9, 'images/Vasa.jpg', 'Handmade Iznik Cini Ceramic', 22, 'İznik ‘Çini’ ceramic is made from region’s special white clay, quartz and silica with a unique technique since 1400. In the ceramic literature, İznik ceramic is known as ‘impossible to produce’.İznik ‘çini’ ceramic differs from ceramic with the amount of quartz in it and baking in low temperatures. These give the çini the features such as stability, toughness, vividness, shine and deepness of colors. Quartz also has a positive impact on environment and lower the stress. Ceramics ornaments have spiritual and symbolic meanings. For example, rose and rose petals mean love and beauty, repetitive forms symbolize the harmony of human, sky and universe.');
  new Product(10, 'images/headvasa.jpg', 'Colorful character flower pot-EINSTEIN head ', 22, 'EINSTEIN PORTRAIT SCULPTURE FLOWER HEAD POT (DESKTOP FLOWER ARRANGEMENT CONTAINER FACE DÉCORYou can now beautifully and stylishly design your home by improving your inner décor and give it a perfect look to attract your visitors with our Einstein handmade face pot which features a minimalist-style. This Einstein portrait head pot can be beautifully displayed on tabletop to brighten up your home,thereby making it perfect for decorating home, office, patio, kitchen, desk and lot more!');
  new Product(11, 'images/Doll.jpg', 'Handmade Cloth Doll', 22, 'This unique ready to ship handmade cloth doll wears removable beautiful designer Liberty of London cotton dress, acessorised with faux fur collar. The doll also wears cute removable underpants . Her face is hand-embroidered, her cheeks are toned. Her arms are button sewn to the body separately. Her hair is made of chunky yarn and fixed in knot, they cannot be restyled. Her body is made of cotton fabric, soaked in tea for more natural skin tone. Made with love and care in smoke and pet free home.');
  new Product(12, 'images/Outlander.jpg', 'Outlander Bookends', 22, 'Handmade Outlander bookends. Also suitable for dvd or video game case ends.Each set is a combination of old fashion woodworking and sci-fi laser cutting. Sure to please any Lady or Highland warrior!Featuring Claire on the left and Jamie on the right both touching the stones of Craigh Na Dun.The bookends themselves are made of 3/4" solid poplar, sanded, water stained and finished and then the laser cut wood silhouette is added.');
  new Product(13, 'images/Bottle.jpg', 'Handmade Art Glass Perfume Bottle', 22, 'his listing consist of Hand Blown Perfume Glassmeasures 7.75 inches or 20 cm heightPlease check photos for more on the look and description as they are an important part of the description.Shipping and Handling FedEx and providing tracking No.Buyer responsible on any import charges');
  new Product(14, 'images/Glass.jpg', 'Glass Space Scene Art Marble', 22, 'This amazing marble features 2 floating Gilson Opal Moons that change color from shimmering green to blue when viewed from different angles. One of the opals is in the front and the other is in the background.  The moon in the back is a crescent moon. A red and white striped planet orbits the moons and soaring between these celestial bodies is a glistening comet!All encased INSIDE of the marble with Nebula Clouds and stars in the background. A multi dimensional experience!');
  new Product(15, 'images/dolllarge.jpg', 'Handmade large rabbit doll ', 22, 'Handmade large rabbit doll Easter spring decorationDoll and clothing are handmade Some small stains on ear as seen in picture See pictures for details Good vintage condition,26 inches long (head to feet),Legs are 12 inches long,Arms are 8 inches long I have made every effort to provide accurate information and take pictures that convey the condition of the items.');
}



// Initialize the app by creating the big list of products with images and names
generateSlider();
generateCatalog();
generateReview();
//console.log(Slider.allSliders);
//console.log(Product.allProducts);