var redux = require('redux');

console.log('Starting redux example');

function changeProp(obj) {
    return {
        ...obj, 
        name: 'Maria'
    };
}


var startingValue = {
    name: 'Matteo',
    age: 33

};

var res = changeProp(startingValue);

console.log ("startingValue", startingValue);

console.log ("res", res);
