const sum = (a,b) => {
    return a +b 
};

console.log(sum(7,3));


let oneEuroIs = {
    "JPY": 127.9, 
    "USD": 1.2, 
    "GBP": 0.8, 
}


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