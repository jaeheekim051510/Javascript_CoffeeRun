// CREATE THE VARIABLES FOR THE DOM ELEMENTS WE NEED TO WORK WITH
var coffeeForm = document.querySelector("[data-coffee-order='form']");
var coffeeOrder = document.querySelector("[name='coffee']");
var emailAddress = document.querySelector("[name='emailAddress']");
var size = document.querySelector("[name='size']");
var flavor = document.querySelector("[name='flavor']");
var strength = document.querySelector("[name='strength']");

var URL = 'http://dc-coffeerun.herokuapp.com/api/coffeeorders'

// Listing orders on page
var coffeeList = document.querySelector('.coffee-list');
var NewCoffeeList = function(order) {
    var list = document.createElement('li');
    var orderText = 'coffee:'+ ' ' +  order.coffee + ', ' + 'email:'+ ' ' + order.emailAddress + ', ' + 'size:'+ ' ' + order.size + ', ' + 'flavor:'+ ' ' + order.flavor + ', ' + 'strength:'+ ' ' + order.strength
    list.textContent = orderText 
    coffeeList.appendChild(list);
    
    //removing from the list and data
    list.addEventListener('click', function(event){
        list.remove();
        $.ajax(URL + '/' + order.emailAddress, {method:'delete'})
    });
}

//load data using ajex
$.get(URL, function(data) {
    var orders = Object.values(data);
        orders.forEach(function(order) {
        NewCoffeeList(order);
    })
})

//creating list of orders
coffeeForm.addEventListener('submit', function(event){
    event.preventDefault();
    var listOrder = ({coffee:coffeeOrder.value, emailAddress: emailAddress.value, size: size.value, flavor: flavor.value, strength: strength.value});
    $.post(URL, listOrder);
    // $.post(URL, function(data){
    //    data:listOrder 
    // })
    NewCoffeeList(listOrder);
    // orders.push(listOrder);
    // localStorage.setItem('coffee', JSON.stringify(orders));
});

//Local Storage 
// var orders = JSON.parse(localStorage.getItem('coffee')) || [];
// orders.forEach(function(order) {
//     NewCoffeeList(order);
// })
