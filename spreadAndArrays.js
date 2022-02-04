'use-strict';

function usingArrays() {
    let productNumber = "A3EBRtFFXVI2";

    let values = [...productNumber]; // '...' is the spread operator
    console.log(values);

    let arr = [1,2,3];
    let arr2 = [...arr]; //copies 'arr'. Would normally use 'slice' method to do this

    //make arrays slightly different
    arr2.push(4);
    arr2[0] = 99;

    console.log(arr);
    console.log(arr2);

    let arrOfObjects = [
        {
            user: "Mike",
            age: 34
        },
        {
            user: "Dave",
            age: 37
        }
    ];

    let diffArr = [...arrOfObjects]; //passes by reference, not by value. Be careful of this
    diffArr[0].user = "Tony"; //this changes both the 'user' elements in 'arrayOfObjects' and 'diffArr' to the same
                              //thing, since it is pass by reference


    console.log(arrOfObjects[0].user);
    console.log(diffArr[0].user);

    let allObjects = arrOfObjects.concat(diffArr); //old way in JS to concatenate two arrays
    let allObjects2 = [...arrOfObjects, ...diffArr]; //new way using 'spread' operator

    console.log(allObjects);
    console.log(allObjects2);
}

function usingMoreArrays() { //creeated another function to help code readability
    let dt = new Date(2019, 10, 15); // 15 Nov 2019 
    console.log(dt);

    let dateFields = [2019, 11, 15]; //15 Dec 2019 with 
    dt = new Date(...dateFields); //creating Date object with 'spread' operator
    console.log(dt);

    manyParams(1,2,3); //pass params the regular way

    let args = [1,2,3]; //pass params with 'spread' operator
    manyParams(...args);

    let person = {
        myName: "Ruben Ruiz",
        age: 23,
        height: 193, //~height in cm
        weight: 330, //weight in lbs
        eyeColor: "brown"
    };

    let copyOfPerson = { ...person }; //copies object by value, not by reference

    //change an element of new object
    copyOfPerson.age = 25;

    //Display the objects
    console.log(person);
    console.log(copyOfPerson);

    console.log();

    //Display changed values
    console.log(person.age);
    console.log(copyOfPerson.age);
}

function manyParams(arg1, arg2, arg3) {
    console.log("In manyParams()");
    console.log(arg1);
    console.log(arg2);
    console.log(arg3);
    console.log("");
}