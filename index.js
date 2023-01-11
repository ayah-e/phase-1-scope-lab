// Write your solution in this file!
var customerName = "bob";
//global variable

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
};

var bestCustomer
//another global variable we want it to be undefined for this test
function setBestCustomer() {
    bestCustomer = "not bob"; //we set bestCustomer to "not bob"
};

function overwriteBestCustomer(){
    bestCustomer = "maybe bob"; //we set bestCustomer to "maybe bob"
};

const leastFavoriteCustomer = "some name"

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = "bob"; //we try to reassign the variable with a new value 
};