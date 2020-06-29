/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var carts = new Cart([]);
var cart;



// var cartItem = new CartItem('Waleed', 20);
// console.log('Here is Waleed product: ', cartItem);
function loadCart() {

  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
  console.log(cart);

}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  var tableRows = document.querySelectorAll('#cart tbody tr');

  for (var i = 0; i <= tableRows.length; i++) {
    if (tableRows[i]) {
      tableRows[i].remove();
    }
  }

}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  // TODO: Find the table body

  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

  var tableBody = document.querySelector('#cart tbody');

  for (var i in cart.items) {
    var tr = document.createElement('tr');
     var imgTD=document.createElement('td');
    var img =document.createElement('img');
    img.setAttribute('src',cart.items[i].img);
    imgTD.appendChild(img);

    var xTD = document.createElement('td');
    xTD.innerHTML = '<Button type="button" id="remove">Remove</Button>';
    xTD.classList.add('remover');
    xTD.id = i;

    var pTD = document.createElement('td');
    pTD.textContent ="$"+ cart.items[i].price;

    var tTD = document.createElement('td');
    tTD.textContent = "$"+cart.items[i].price*cart.items[i].quantity;


    var qTD = document.createElement('td');
    qTD.textContent = cart.items[i].quantity;

    var nTD = document.createElement('td');
    nTD.textContent = cart.items[i].product;

    tableBody.appendChild(tr);
    tr.appendChild(imgTD);
    tr.appendChild(nTD);
    tr.appendChild(pTD);
    tr.appendChild(qTD);
    tr.appendChild(xTD);
    tr.appendChild(tTD);
   
  }
}

function removeItemFromCart(event) {
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table
  if (event.target.classList.contains('remover')) {
    cart.removeItem(parseInt(event.target.id));
    cart.saveToLocalStorage();
    renderCart();
  }

}

// This will initialize the page and draw the cart on screen
renderCart();