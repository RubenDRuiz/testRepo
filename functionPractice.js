//using the Arguments object 
function printAll() { //notice how no params are passed
    for(const index in arguments) {
        console.log(arguments[index]);
    }
}

printAll(1,2,3,4,5);