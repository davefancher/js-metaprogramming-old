// typeof provides rudimentary support for determining a variable's type. As
// the MDN docs say "typeof is very useful, but it's not as versatile as
// might be required.". This is due to typeof often returning different things
// depending on how a value was created or how JavaScript represents other
// types internally.

// Numbers
typeof 37; //?
typeof Number(37); //?
typeof new Number(37); //?
typeof NaN; //?
typeof Number("nope"); //?

// Strings
typeof "Hello"; //?
typeof String("Hello"); //?
typeof new String("Hello"); //?

// Booleans
typeof true; //?
typeof Boolean(1); //?
typeof new Boolean(1); //?

// Date
typeof new Date(); //?

// Arrays
typeof [ 1, 2, 3 ]; //?

// nils
typeof null; //?
typeof undefined; //?

// functions
typeof (function (name) { return `Hello, ${name}`; }); //?
typeof (name => `Hello, ${name}`); //?
