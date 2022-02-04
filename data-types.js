'use-strict';

function callAndApply() {
    let product = { //obj 1
        profit1: 100,
        profit2: 200,
        profit3: 275,
        printProfit: function() {
            return (this.profit3 - this.profit2).toLocaleString("en-US",
            {
                "style": "currency", "currency": "USD"
            });
        }
    };

    let product2 = { //obj 2
        profit1: 300,
        profit2: 600,
        profit3: 900,
    };

    //call using 'product' properties
    console.log(product.printProfit.call(product));
    //call using 'product2' properties
    console.log(product.printProfit.call(product2));
    console.log(""); //create space
    //apply allows you to pass parameters, unlike call. No params to pass here, so
    //works the same as 'call()'
    console.log(product.printProfit.apply(product));
    console.log(product.printProfit.apply(product2));

}