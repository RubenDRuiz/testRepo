'use-strict';
let result;
try { //attempts to run
    result = x/10; //error
} catch (error) { //do something with caught error
    console.log(error.message);
}
finally { //always executes
    console.log("In the 'finally' block");
}

function customThrow() {
    try {
        printName();
    } catch (error) {
        console.log(error.message + " - Error Type: " + error.name);
    }
}

function printName() {
    let myName = "";
    
    try {
        myName = x/"hello"; //error
    } catch (error) {
        throw { //creates a thrown error object
            message: "In the printName() function doing the following error: " + error.message,
            name: "Bad Coding"
        };
    }
}
