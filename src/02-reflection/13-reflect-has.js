// Reflect.has is the final function we'll discuss from the Reflect type. As
// its name implies Reflect.has determines whether an object has a property
// with a given key similar to how the `in` operator works.

const myObject = {
    firstName: "Dave",
    lastName: "Fancher",
    address: null
};

Reflect.has(myObject, "age"); //?

Object.defineProperty(
    myObject,
    "age",
    {
        enumerable: false,
        value: 41,
    });

Reflect.has(myObject, "age"); //?

// In general, I prefer Reflect.has to the `in` operator because I feel that
// Reflect.has better expresses intent.

// Regardless of style, I tend to prefer Reflect.has over the old fashioned
// approach of relying on truthiness when accessing a property since any
// properties intentionally set to null or undefined would result in
// the system behaving as if the property didn't exist.

(!!myObject.address); //?
Reflect.has(myObject, "address"); //?
