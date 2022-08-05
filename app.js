console.log("Hello World")

// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
const sum = (a,b) => {
    return a +b 
};

console.log(sum(7,3));


let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// let dolar, yen, euro, pound

let fromEuroToDollar = function(euros){

    return euros * 1.2;
    
    
    
}

let fromDollarToYen = function(dolares) {
    return (dolares/1.2) * 127.9;
    
}


let fromYenToPound = function(yenes) {
    return (yenes/127.9) * 0.8;
    
}


module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };