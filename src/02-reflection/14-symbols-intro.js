// Symbols are an interesting built-in type in that they're guaranteed to be unique when created with the Symbol constructor.

const mySymbol = Symbol(); //?

// Symbols will still be unique when created with a label. The label's only purpose is to help identify the symbols when debugging.

const testSymbol1 = Symbol("test"); //?
const testSymbol2 = Symbol("test"); //?
testSymbol1 === testSymbol2; //?

// Symbols can be registered within the Global Symbol Registry so they can be easily shared
// across your code base and referenced by a known key. We register a global symbol with the
// Symbol.for function.

const globalSymbol = Symbol.for("myGlobalSymbol");
globalSymbol === Symbol.for("myGlobalSymbol"); //?

// We can also look up the key for a Symbol shared in the Global Symbol Registry by
// passing the Symbol to the keyFor function.

Symbol.keyFor(globalSymbol); //?

// Despite their simplicity Symbols are actually quite powerful since their primary purpose
// is to serve as an alternative to string-based keys.

// Recall from the discussion about Reflect.ownKeys that the Object type exposes a function
// called getOwnPropertySymbols which is separate from getOwnPropertyNames. This essentially
// means that properties are split into two categories where the key-based properties represent
// data and Symbol-based properties represent unique extensibility points.

// Let's take a look at defining an object with a Symbol-based property. Note that we need to
// enclose the Symbol in brackets when defining the property in the object literal.

const greet = Symbol("greet");
const sayHello = function () { return `Hello, ${this.firstName} ${this.lastName}!`; };
const myObject = {
    firstName: "Dave",
    lastName: "Fancher",
    [greet]: sayHello
};

// Great! We now have an object with a Symbol property. What does that look like?

myObject; //?

// When inspecting the object structure we see that there's indeed a third property that
// is represented not as a string but as a Symbol. Because the Symbol is guaranteed to be unique
// the only way for a collision to occur would be for some code to intentionally interrogate the
// type to find the Symbol then use it. This is a stark contrast to how conflicting libraries
// might extend an object with the same identifier thereby making only one of the libraries
// available as the second one loaded overrode the first.

// Now that we have the object with a Symbol property and we still have our Symbol reference
// We can invoke the function as follows:

myObject[greet](); //?

// Just as when defining the Symbol property we can access the symbol only through
// the bracket syntax.

// This example is a bit contrived so let's look at something a bit more interesting in the next section.




