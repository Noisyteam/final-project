"use strict";
var productDetailsForm = document.getElementById('productDetailsForm');
var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productImage = document.getElementById("productImge");
var productDescription = document.getElementById("productDescription");
var quantity = document.getElementById('quantity');
var items =  JSON.parse(localStorage.getItem('cart')) || [];
var item = localStorage.getItem('selectedItem');
var cart;
  
console.log("rrrrr" + item);
function getItem(){
    var cartItem = JSON.parse(localStorage.getItem('cart')) || [];
    cart = new Cart(cartItem);
    
    for (var i = 0; i < Product.allProducts.length; i++) {
        if (Product.allProducts[i].id == item) {
            productName.innerHTML = Product.allProducts[i].name;
            productPrice.innerHTML = Product.allProducts[i].price;
            productDescription.innerHTML = Product.allProducts[i].details;
            productImage.src = Product.allProducts[i].filePath;

        }
    }
    console.log(items);
}

//TODO: Add the selected item and quantity to the cart
function addToCart(event) {
    // TODO: suss out the item picked from the select list
    // TODO: get the quantity
    // TODO: using those, add one item to the Cart
    event.preventDefault();
  
    var item = productName.innerHTML;
    var price = productPrice.innerHTML;
    var img = productImage.src;
    var qyt = quantity.value;
    console.log('addTocart Fun',localStorage.getItem('cart'));
    cart.addItem(item, qyt, img, price);

    cart.saveToLocalStorage();
  
  }

  productDetailsForm.addEventListener('submit', addToCart);
getItem();