/* global Product */

"use strict";

var cart = new Cart([]);

// var txtQuantity = document.getElementById('quantity');
// var cartContents = document.getElementById('cartContents');
// var itemCount = document.getElementById('itemCount');
var productContaainer = document.getElementById("productContaainer");

// var ul = document.createElement('ul');
// cartContents.appendChild(ul);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {
  //TODO: Add an <option> tag inside the form's select for each product
  // var selectElement = document.getElementById('items');

  for (var i in Product.allProducts) {
    console.log(Product.allProducts[i]);
    // var optionElement = document.createElement('option');
    // optionElement.textContent = Product.allProducts[i].name;
    // optionElement.setAttribute('value', Product.allProducts[i].name);
    // selectElement.appendChild(optionElement);

    var div = document.createElement("div");
    div.setAttribute("class", "card");
    div.setAttribute("id", "newProduct" + Product.allProducts[i].id);

    div.innerHTML =
      '<a href="productDetail.html"><img src="' +
      Product.allProducts[i].filePath +
      '" alt="Denim Jeans" style="width:100%">' +
      "<h2>" +
      Product.allProducts[i].name +
      "</h2>" +
      '<p class="price">' +
      Product.allProducts[i].price +
      "</p></a>" +
      '<button onClick="handleSubmit(this);">Add to Cart</button>';
    productContaainer.appendChild(div);
  }
}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {
  // event.preventDefault();
  // TODO: Prevent the page from reloading
  // console.log(selectElement.options[selectElement.selectedIndex].value, txtQuantity.value);
  // Do all the things ...
  addSelectedItemToCart(event);
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();
}

function addNewProduct(event) {
  event.preventDefault();

  var pname = document.getElementById("pname").value;
  var price = document.getElementById("price").value;
  var pdetails = document.getElementById("pdetails").value;
  var pImg = document.getElementById("pImg").src;

  var counter = Product.allProducts.length + 1;

  new Product(counter, "", "test", 15, "test details");
  var div = document.createElement("div");
  div.setAttribute("class", "card");
  div.setAttribute("id", "newProduct" + counter);

  div.innerHTML =
    '<a href="productDetail.html">' +
    '<img src="pImg" style="width:100%">' +
    "<h2>" +
    pname +
    "</h2>" +
    '<p class="price">' +
    price +
    "</p></a>" +
    '<button onClick="handleSubmit(this);">Add to Cart</button>';
  productContaainer.appendChild(div);

  modal.style.display = "none";
}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart(event) {
  // TODO: suss out the item picked from the select list
  // TODO: get the quantity
  // TODO: using those, add one item to the Cart
  var parentDiv = event.parentNode;
  var id = parentDiv.getAttribute("id");

  var item = document.querySelector("#" + id + " h2").innerHTML;
  var price = document.querySelector("#" + id + " .price").innerHTML;
  var img = document.querySelector("#" + id + " img").src;

  cart.addItem(item, 1, img, price);
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  itemCount.innerHTML = cart.items.length;
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information)
  // var item = document.getElementById('items').value;
  //   var li = document.createElement('li');
  //   li.textContent = `${item}: ${txtQuantity.value}`;
  //   ul.appendChild(li);
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
var productForm = document.getElementById("productForm");
productForm.addEventListener("submit", addNewProduct);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
