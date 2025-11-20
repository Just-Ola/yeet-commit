var votingAge = 18;

var HaveVotersCard = false;

if (votingAge >= 18 || HaveVotersCard) {
    console.log("You can vote")
}
else{
    console.log("You cannot vote")
}


var myChoice="Rice"
var available="Spag"

if(myChoice==available) {
    console.log("You can buy")
}  else{
    console.log("Don't buy")
}


var age= 16
paidTution= "True"
passedJAMB="True"
Have5credits="True"

if( age>= 16 && paidTution && passedJAMB && Have5credits){
    console.log("You r admitted")
}else{
    console.log ("You are not admitted")
}




//you want to travel to UK, for 1wk tourism
//write a if..else conditional statement that tests
//if you have a valid passport, visa, flight booking and hotel reservation
//  You can travel otherwisw, you cannot travel

var hasPassport= true
var hasVisa= true
var flightbooking= true
var hotelreservation= true

if(hasPassport && hasVisa && flightbooking && hotelreservation){
    console.log("You can travel bruvv")
} else{
    console.log("You cannot travel bruvv")
}



var hasPassport= true
var hasVisa= true
var flightbooking= false
var hotelreservation= false

if((hasPassport || hasVisa) && (flightbooking || hotelreservation)){
    console.log("You can travel bruvv")
} else{
    console.log("You cannot travel bruvv")
}


//Ternary Operator
var votingAge = 18;
votingAge>=18 ? console.log("You can vote") : console.log("You cannot vote");

var votingAge = 16;
votingAge>=18 ? console.log("You can vote") : console.log("You cannot vote");



//updated today 20/11/2025


//long-way...
var grade= 30

if (grade<30){
    console.log("Your grade is F!!")
}
else if (grade>=30 && grade<35){
    console.log("Your grade is E")
} else if (grade>=35 && grade <55){
    console.log("Your grade is D")
} else if (grade>=55 && grade<65){
    console.log("Your grade is C")
} else if (grade>=65 && grade<75){
    console.log("Your grade is B")
} else if (grade>=75){
    console.log("Your grade is A")
}

//Using switch case, the 

let day=1
switch(day){
    case 1:
        console.log("Monday")
     break

     case 2:
        console.log("Teusday")
    break

     case 3:
        console.log("Wednesday")
    break 

    case 4:
        console.log("Thursday")
    break

     case 5:
        console.log("Friday")
     break 

     case 6:
        console.log("Saturday")
    break 

    case 7:
        console.log("Sunday")
    break
}


//shortcut in finding grades... insted of using if...else.
let score= 50;
let grad;

switch(true){
    case score>= 90:
    grad= "A";
    break;

    case score>= 70:
    grad= "B";
    break;

    case score>= 60:
    grad= "C";
    break;

    case score>= 50:
    grad= "D";
    break;

    case score>= 40:
    graD= "E";
    break;

}

console.log("Grade:", grad)