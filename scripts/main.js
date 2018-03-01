
// CREATE THE VARIABLES FOR THE DOM ELEMENTS WE NEED TO WORK WITH

var coffeeForm = document.querySelector("[data-coffee-order='form']");
var coffeeOrder = document.querySelector("[name='coffee']");
var emailAddress = document.querySelector("[name='emailAddress']");
var size = document.querySelector("[name='size']");
var flavor = document.querySelector("[name='flavor']");
var strength = document.querySelector("[name='strength']");

// Listing orders on page
var coffeeList = document.querySelector('.coffee-list');
var NewCoffeeList = function(order) {
    var list = document.createElement('li');
    list.textContent = order.toString();
    coffeeList.appendChild(list);

    //removing from the list
    list.addEventListener('click', function(event){
        list.remove();
    })
}

//Local Storage 
var orders = JSON.parse(localStorage.getItem('coffee')) || [];
orders.forEach(function(order) {
    NewCoffeeList(order);
})

//creating list of orders
coffeeForm.addEventListener('submit', function(event){
    var listOrder = [];
    event.preventDefault();
    listOrder.push([coffeeOrder.value, emailAddress.value, size.value, flavor.value, strength.value]);
    NewCoffeeList(listOrder);
    orders.push(listOrder);

    localStorage.setItem('coffee', JSON.stringify(orders));
});











