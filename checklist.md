# Checklist

Before you submit the final version of your labs, make sure that your project fullfills all of the tasks mentioned above.

## 00 Introduction

- [V] Install an IDE on your system

## 01 Git

- [V] Fork and clone the 1md032_18_students repository


## 02 HTML

Create an index.html file which contains:
- [V] A headline
- [V] A section to select burgers that contains at least three items. Each item has:
	- [V] A name
	- [V] An image
	- [V] Information about allergies 
- [V] A section to collect customer information:
	- [V] First- and Last Name (in one field)
	- [V] E-Mail Address
	- [V] Street
	- [V] House Number (only allowing numbers in this field)
	- [V] Gender (male, female, do not wish to provide as radio buttons)
- [V] A button to place the order
- [V] Ensure the website loads when opening http://localhost:3000/

## 03 CSS

Create a style.css file which contains:
- [V] A rule to make the allergy information bold
- [V] Different text and background color for the two different sections (burger selection and customer information)
- [V] Change the cursor when hovering over the order button
- [V] Adds margins to the sections and the order button
- [V] Add a border to the two sections
- [V] Create a header that palces an image behind the headline
- [V] Use a grid layout instead of tables for the burger selection section


## 04 JavaScript

Create a menu.js file which contains:
- [V] At least five different burgers with respective attributes

Create a js_script.js file which contains:
- [V] A MenuItem constructor 
- [V] A function that defines at least five different burgers using the MenuItem constructor and adds them to an array
- [V] A function that loops through the array and inserts the information to the burger selection section of the index.html file
- [V] A function that loads the information from the menu.js json object and inserts the information to the burger selection section of the index.html file
- [V] Only displays allergy information if relevant (either only if it contains gluten or lactose, or only if it's gluten or lactose free)
- [V] Add a checkbox to each menu item
- [V] A functionality for the order button that writes the information from the text boxes, the gender and all items on the order (that have the checkbox checked) to the bottom of the html file when the button is clicked

Create a vue_script.js file which contains:
- [V] A function that loops through the array and inserts the information to the burger selection section of the index.html file
- [V] A function that loads the information from the menu.js json object and inserts the information to the burger selection section of the index.html file
- [V] Only displays allergy information if relevant (either only if it contains gluten or lactose, or only if it's gluten or lactose free)
- [V] Add a checkbox to each menu item
- [V] A functionality for the order button that writes the information from the text boxes, the gender and all items on the order (that have the checkbox checked) to the bottom of the html file when the button is clicked

## 05 Messaging

- [V] Exchange the field for the customer's address with the interactive map
- [V] Location information from the map should be send to the dispatcher view when pressing the "order" button
- [V] In the dispatcher view, you should see the following for every order:
    - [V] A location on the map
    - [V] The order information
    - [V] The customer information
    
## Optional
- [V] Set the orderID on client side so one customer can make multiple orders
- [V] Only allow the order to be sent if all necessary information are provided
- [V] Display the order(s) on the customer page as well
- [V] Allow the dispatcher to handle orders by providing buttons next to every order that can switch the order status to "in preparation" and "done"
- [V] Display the order status to the customer and update it in the customer view if updated by the dispatcher
- [ ] Find a better visualization for what orders belong to which location on the map