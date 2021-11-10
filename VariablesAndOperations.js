//create a variable to hold the quantity of available plane seats left on a flight
let availablePlaneSeats = 6;
		
//create a variable to hold the cost of groceries at checkout
let costOfGroceries = 15.99;

//create a variable to hold a person's middle initial
let middleInitial = "C";

//create a variable to hold true if it's hot outside and false if it's cold outside
let hot = true;
let cold = false;
//create a variable to hold a customer's first name
let custFirstName = "Hunter ";

//create a variable to hold a street address
let streetAddress = "475 Cammie ct"

//print all variables to the console

console.log(availablePlaneSeats, costOfGroceries, middleInitial, hot, cold, custFirstName, streetAddress)


//a customer booked 2 plane seats, remove 2 seats from the available seats variable
let bookedPlaneSeats = 2;
console.log(availablePlaneSeats - bookedPlaneSeats);

//impulse candy bar purchase, add 2.15 to the grocery total
console.log(costOfGroceries = costOfGroceries + 2.15);


//birth certificate was printed incorrectly, change the middle initial to something else
middleInitial = "D "
console.log(middleInitial);
//the season has changed, update the hot outside variable to be opposite of what it was
hot = !hot;
cold = !cold;
console.log(hot, cold)


//create a new variable called full name using the customer's first name, the middle initial, and a last name of your choice
let lastName = "Frost ";
console.log(custFirstName + middleInitial + lastName)

//print a line to the console that introduces the customer and says they live at the address variable
let custName = custFirstName + middleInitial + lastName;
let nameAndAddress = "Hello my name is " + custName + "and I live at " + streetAddress + ".";
console.log(nameAndAddress);