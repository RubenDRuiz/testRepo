'use-strict';

//Using for/in loop
function forinSample() {
    let car = {
        price: 23000,
        color: "black",
        size: 3500,
        wheels: 4,
        getPrice: function() {
            return this.price;
        }
    };

    for(const key in car) {
        console.log("'" + key + "'=" + car[key]);
    }
}

//using for/of loop
function forofSample() {
    let products = [ //array containing objects
        {//obj 1
        price: 23000,
        color: "black",
        size: 3500,
        wheels: 4,   
        },
        {//obj 2
        price: 27500,
        color: "blue",
        size: 3800,
        wheels: 8,   
        },
        { //obj 3
        price: 40000,
        color: "red",
        size: 50000,
        wheels: 16,   
        },
    ]; //end array
    for(const item of products) {
            console.log(JSON.stringify(item));
        }
}

//looping a string
function loopStringExample() {
    let intro = "My name is Ruben Ruiz";
    let letters = "";
    
    for(const char of intro) {
        letters += char;
    }
    console.log(letters);
}

