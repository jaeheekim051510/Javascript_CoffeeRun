

// var URL = 'http://dc-coffeerun.herokuapp.com/api/coffeeorders'
// $.get(URL, function(data) {
//     console.log
// })

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
    var orderText = order.coffee + ' ' + order.email + ' ' + order.size + ' ' + order.flavor + ' ' + order.strength
    list.textContent = orderText 
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
    var listOrder = ({coffee:coffeeOrder.value, email: emailAddress.value, size: size.value, flavor: flavor.value, strength: strength.value});
    event.preventDefault();
    NewCoffeeList(listOrder);
    orders.push(listOrder);

    localStorage.setItem('coffee', JSON.stringify(orders));
});











