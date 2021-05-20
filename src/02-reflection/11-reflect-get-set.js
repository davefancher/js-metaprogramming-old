// Reflect.get and Reflect.set do exactly what they say they do: get and set properties on
// an object.

const myObject = {
    firstName: "Dave",
    lastName: "Fancher"
};

Reflect.set(myObject, "firstName", "David"); //?
Reflect.get(myObject, "firstName"); //?

myObject; //?

// I don't find them all that useful for day-to-day tasks since I generally have reasonable
// knowledge about the objects I'm working with but in situations where objects are being
// more dynamically managed these functions can be useful in preventing setting properties
// on non-objects
