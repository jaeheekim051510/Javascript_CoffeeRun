// CREATE THE VARIABLES FOR THE DOM ELEMENTS WE NEED TO WORK WITH
var coffeeForm = document.querySelector("[data-coffee-order='form']");

var coffeeOrder = document.querySelector("[name='coffee']");
var emailAddress = document.querySelector("[name='emailAddress']");
var size = document.querySelectorAll("[name='size']");
var flavor = document.querySelector("[name='flavor']");
var strength = document.querySelector("[name='strength']");

var URL = 'http://dc-coffeerun.herokuapp.com/api/coffeeorders'

// Listing orders on page
var coffeeList = document.querySelector('.coffee-list');
var NewCoffeeList = function(order) {
    var list = document.createElement('li');
    var orderText = 'coffee:'+ ' ' +  order.coffee + ', ' + 'email:'+ ' ' + order.emailAddress + ', ' + 'size:'+ ' ' + order.size + ', ' + 'flavor:'+ ' ' + order.flavor + ', ' + 'strength:'+ ' ' + order.strength
    list.textContent = orderText;
    coffeeList.appendChild(list);

    // Click on a order list to hide the current list item and remove from data.
    list.addEventListener('click', function(event){
        list.style.backgroundColor = 'green';
        //Removes the list after 2 sec.
        setTimeout(function() {
            list.remove();
            $.ajax(URL + '/' + order.emailAddress, {method:'delete'})
        }, 2000);
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
    var listOrder = ({coffee:coffeeOrder.value, emailAddress: emailAddress.value, size: form.size.value, flavor: flavor.value, strength: strength.value});
    $.post(URL, listOrder);
    NewCoffeeList(listOrder);
});
