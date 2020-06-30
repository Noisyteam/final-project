/* global Product, Cart */

'use strict';
var emailForm = document.getElementById('email_form');
// Set up an empty cart for use on this page.
var cart = new Cart([]);

// var txtQuantity = document.getElementById('quantity');
// var cartContents = document.getElementById('cartContents');
// var itemCount = document.getElementById('itemCount');
var productSection = document.getElementById('productSection');
var featurerProductSection = document.getElementById('featurerProductSection');



//Email Subscription
var Email = function(email) {
  this.email = email
  Email.allEmails.push(this);
  localStorage.setItem('EmailList', JSON.stringify(Email.allEmails));
 };
Email.allEmails = [];


// var ul = document.createElement('ul');
// cartContents.appendChild(ul);


// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  // var selectElement = document.getElementById('items');

  var reviewList = document.getElementById('userReviewSlides');


  for (var x in Slider.allSliders) {
    
  }

  for (var i in Product.allProducts) {
    if(i < 20) {
      console.log(Product.allProducts[i]);
      // var optionElement = document.createElement('option');
      // optionElement.textContent = Product.allProducts[i].name;
      // optionElement.setAttribute('value', Product.allProducts[i].name);
      // selectElement.appendChild(optionElement);

      var div = document.createElement('div');
      div.setAttribute('class', 'card');
      div.setAttribute('id', 'newProduct' + Product.allProducts[i].id);

      div.innerHTML = '<div class="col-md-3 Marquee-tag">'+
      '<div class="productwrap">'+
        '<div class="pr-img">'+
          '<a onclick = "saveIDToLocalStorage('+Product.allProducts[i].id+')" href="productdetails.html"><img src="'+Product.allProducts[i].filePath+'" alt="" class="img-responsive"/></a>'+
          '<div class="pricetag on-sale"><div class="inner on-sale"><span class="onsale"><span class="oldprice">$314</span>$'+ Product.allProducts[i].price +'</span></div></div>'+
        '</div>'+
        '<span class="smalltitle"><a href="productdetails.html">'+Product.allProducts[i].name+'</a></span>'+
        '<span class="smalldesc">Item no.: 1000</span>'+
      '</div>'+
    '</div>';
    featurerProductSection.appendChild(div);
      }
  }

  for (var i in Product.allProducts) {
    if(i < 6) {
      console.log(Product.allProducts[i]);
      // var optionElement = document.createElement('option');
      // optionElement.textContent = Product.allProducts[i].name;
      // optionElement.setAttribute('value', Product.allProducts[i].name);
      // selectElement.appendChild(optionElement);

      var div = document.createElement('div');
      // div.setAttribute('class', 'card');
      div.setAttribute('id', 'featureProduct' + Product.allProducts[i].id);
      // div.innerHTML = '<a href="productDetail.html"><img src="'+Product.allProducts[i].filePath+'" alt="Denim Jeans" style="width:100%">' +
      //   '<h2>'+Product.allProducts[i].name+'</h2>' +
      //   '<p class="price">'+ Product.allProducts[i].price +'</p></a>' +
      //   '<button onClick="handleSubmit(this);">Add to Cart</button>';

        div.innerHTML = '<div class="col-md-4">'+
        '<div class="productwrap">'+
          '<div class="pr-img">'+
            '<a onclick = "saveIDToLocalStorage('+Product.allProducts[i].id+')" href="productdetails.html"><img src="'+Product.allProducts[i].filePath+'" alt="" class="img-responsive"/></a>'+
            '<div class="pricetag on-sale"><div class="inner on-sale"><span class="onsale"><span class="oldprice">$314</span>$'+Product.allProducts[i].price+'</span></div></div>'+
         ' </div>'+
          '<span class="smalltitle"><a href="product.html">'+Product.allProducts[i].name+'</a></span>'+
          '<span class="smalldesc">Item no.: 1000</span>'+
        '</div>'+
      '</div>';
      productSection.appendChild(div);
      }
  }

  for (var i in UserReview.allReviews) {
    var li = document.createElement('li');
    li.innerHTML = '<li class="slide">' +
          '<p>' +
            '<q>'+ UserReview.allReviews[i].reviewText  +'</q>' +
            '<span class="author">' +
              '<img src="'+ UserReview.allReviews[i].imgPath  +'">' +
              UserReview.allReviews[i].name + '' +
            '</img></span>' +
          '</p>' +
        '</li>';
        reviewList.appendChild(li);
  }
}

function saveIDToLocalStorage(id) {
  localStorage.setItem('selectedItem', JSON.stringify(id));
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

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart(event) {
  // TODO: suss out the item picked from the select list
  // TODO: get the quantity
  // TODO: using those, add one item to the Cart
  var parentDiv = event.parentNode;
  var id = parentDiv.getAttribute("id");

  var item = document.querySelector('#' + id + ' h2').innerHTML;
  var price = document.querySelector('#' + id + ' .price').innerHTML;
  var img = document.querySelector('#' + id + ' img').src;

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

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
// var catalogForm = document.getElementById('catalog');
// catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
//Event Handler
function addNewEmail(event) {
  var newEmail = event.target.email.value;
  event.preventDefault();
   new Email(newEmail);
 }
 //Event Listener
emailForm.addEventListener('submit', addNewEmail);