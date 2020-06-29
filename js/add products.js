"use strict";
var formContainer = document.createElement("div");
formContainer.className = "formContainer";

var addProductsForm = document.createElement("FORM");
addProductsForm.setAttribute("id", "addProductsForm");
formContainer.appendChild(addProductsForm);

var formRow = document.createElement("div");
formRow.className("formRow");
addProductsForm.appendChild(formRow);

var col25 = document.createElement("div");
col25.className = "col25";
formRow.appendChild(col25);
