var is = require('./index');
var log = console.log;

//Does a variable have a value?

log(is(undefined)); //false
log(is(null)); //false
log(is(NaN));  //false
log(is(10));   //true
log(is(-10));   //true
log(is(true));   //true
log(is(false));   //true

//Is a variable a specific type?

log(is([], Object)); //true
log(is([], Array));  //true

log(is(true, Boolean));  //true
log(is(false, Boolean)); //true
log(is(10, Number));     //true

log(is("str", String));  //true
log(is("str", Object));  //false

log(is(new String("str"), String));   //true
log(is(new String("str"), Object));   //true

log(is(/expr/, RegExp));  //true
log(is(/expr/, Object));  //true

log(is(function(){}, Object));    //true
log(is(function(){}, Function));  //true

log(is(new function(){}, Object));    //true
log(is(new function(){}, Function));  //False

log(is(Array, Object));  //true
log(is(Array, Function));//true
log(is(Array, Array));   //false

//Is a variable a custom type?

function Foo() {};

log(is(new Foo(), Foo)); // true

var foo = function(){};
var bar = function(){};

log(is(new foo(), foo)); // true
log(is(new bar(), foo)); // false

//Is a variable one of multiple types?

log(is("str", Number, Boolean, String)); // true

//If types are supplied, they must be Functions:

try {
  log(is("str", "otherstring")); //throws Error
} catch (err) {
  log('test passed');
}
