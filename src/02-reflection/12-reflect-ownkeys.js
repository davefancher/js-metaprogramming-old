// Reflect.ownKeys is a combination of Object.getOwnPropertyNames and
// Object.getOwnPropertySymbols (which we haven't discussed yet). This
// is most useful when you want to know about everything that directly
// belongs to an object. Don't worry, we'll be talking about Symbols soon.

const myObject = {
    firstName: "Dave",
    lastName: "Fancher"
};

Object.defineProperty(
    myObject,
    "age",
    {
        enumerable: false,
        value: 41,
    });

Reflect.ownKeys(myObject); //?
