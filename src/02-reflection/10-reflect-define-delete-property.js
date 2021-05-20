// Reflect.defineProperty and Reflect.deleteProperty offer a consistent, unified
// interface for manipulating objects.

const myObject = {
    firstName: "Dave",
    lastName: "Fancher"
};


// Reflect.defineProperty has the same signature as Object.defineProperty so the
// following should look rather familiar

Reflect.defineProperty(
    myObject,
    "age",
    {
        // Set configurable to allow deletion later
        configurable: true,
        enumerable: true,
        value: 41,
    });

myObject; //?

// One significant way that Reflect.defineProperty differs from Object.defineProperty is
// that Object.defineProperty throws an error if the operation fails whereas
// Reflect.defineProperty returns false.

// Unlike the Object functions, Reflect also provides a function for removing properties.

Reflect.deleteProperty(myObject, "age");

myObject; //?

// This is definitely a bit more verbose than the delete operator but I find this way
// to be more communicative of intent
