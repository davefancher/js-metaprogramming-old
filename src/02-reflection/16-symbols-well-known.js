// Modern JavaScript makes extensive use of Symbols internally to drive some core
// language features. These features include things like `instanceof`, `for..of`,
// and even `toString`! This is accomplished by using Symbols in a manner similar
// to how .NET uses interfaces to drive constructs like `using`.

// There are a number of "well-known" symbols exposed as static properties of
// the Symbol type. These are the Symbols used to drive the features discussed
// above. Let's see how we can use one of these, `Symbol.toStringTag` to customize
// our object's behavior. We'll begin by adding the a property using the well-known
// Symbol.

const myObject = {
    firstName: "Dave",
    lastName: "Fancher",
};

Reflect.defineProperty(
    myObject,
    Symbol.toStringTag,
    {
        // Use get here since setting value to a function doesn't work
        // To maintain the reference to the object for use in the function we need to
        // use the classic function syntax rather than an arrow function since
        // arrow functions don't have access to `this`
        get: function () { return `"${this.firstName} ${this.lastName}"`; }
    });

`${myObject}`; //?

// By attaching a custom function via the well-known symbol to our object we were
// successfully able to change how the default `toString` behaves without affecting
// `toString` itself because `toString` knows to look for that symbol. Due to the
// guaranteed uniqueness the underlying infrastructure can reliably provide those
// hooks without relying on magic strings.
