var redux = require('redux');

//console.log('Starting redux example');


var reducer = (state = { name: 'Anonymous' }, action) => {
    //state = state || {name: 'Anonymous' }

    return state;

};

var store = redux.createStore(reducer);

var currentState = store.getState();

//console.log("currentstate", currentState);

challenge();


function challenge() {

    /* Braces/brackets/parentheses validator.  
      '(', '{', '[' are called "openers."
      ')', '}', ']' are called "closers."
            
      Write an efficient function that tells us whether or not an input string's openers and closers are properly nested.  
  "{ [ ] ( ) }" should return true
  "{ [ ( ] ) }" should return false
  "{ [ }" should return false

  */
    // true
    console.log("TRUE");
    console.log(validate('{}'));
    console.log(validate('{}[]()'));
    console.log(validate('[{}]'));
    console.log(validate('([]{})'));
    // // False
    console.log("FALSE");
    console.log(validate('{[(])}'));
    console.log(validate('}{}[]()'));
    console.log(validate('()[{(})]'));
    console.log(validate('()()()([[]){}{([]{})}[]'));

    var passVal = [];
    function validate(test) {

        console.log('*** validate open=0 closed=1: ' + test + " ***");

        passVal = [];
        //  var isValid = null;
        var checkVal = '';
        var hasErrors = [];
        var xlen = test.length - 1;

        for (var i = 0; i <= xlen; i++) {
            var charIndex = test.indexOf(test[i]);
            var charIs = matchTag(test[i]);
            passVal.push(charIs);

           // unique case first is closed
            if (i === 0 && charIs === 1) {
                 hasErrors.push(charIs);
            }
        }

        var charIndex = test.indexOf(test[i]);
        console.log("show pattern str: " + passVal.toString());
         var  inValidPatternMatch = '0,0,1,1';
         var seek = passVal.toString();
         var charMatchInvalid= seek.indexOf(inValidPatternMatch);

       //  console.log ("charMatchInvalid ", charMatchInvalid)
        if (charMatchInvalid >0) {
            hasErrors.push(charIs);            
        }
     //   console.log("~~stats: ", passVal, " passVal.length", passVal.length);
        if (hasErrors.length > 0) {
            console.log("~~~~~~ Found errors ;-( ;-( ;-(");
        } else {
             console.log("~~~~~ Success :-) :-) :-)");
        }
        // *******
        return "*** done ***";
    }

    function matchTag(tag) {
        var TAG_MAX = 2;
        var tagsOpen = ['{', '[', '('];
        var tagsClosed = ['}', ']', ')'];

        for (var i = 0; i <= TAG_MAX; i++) {
            if (tagsOpen[i] == tag) {
                return 0;
            }
            if (tagsClosed[i] == tag) {
                return 1;
            }
        }


    } // -matchTag


} // -challenge


//destructuringExample();

function destructuringExample() {
    // list matching
    var [a, b, c] = [1, 2, 3];

    console.log("a " + a + " b " + b, " c " + c);

    var z1 = { op: a, lhs: { op: b }, rhs: c }

    console.log("z1", z1);
    var z2 = { uno: z1.op, due: z1.lhs, tre: z1.rhs };
    console.log("z2", z2);

    console.log("z2-due", z2.due.op);

    // Can be used in parameter position
    function g({ name: x }) {
        console.log(x);
    }
    g({ name: 5 })

    // Fail-soft destructuring
    var [a] = [];
    a === undefined;

    // Fail-soft destructuring with defaults
    var [a = 1] = [];
    a === 1;
}


//pureFunctionExample();

function pureFunctionExample() {


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

    console.log("startingValue", startingValue);

    console.log("res", res);

}