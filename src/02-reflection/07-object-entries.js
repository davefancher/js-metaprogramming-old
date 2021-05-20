// Essentially a combination of Object.keys and Object.values, Object.entries
// gets an array of the own key/value pairs from an object

const myObject = {
    firstName: "Dave",
    lastName: "Fancher"
};

Object.defineProperty(
    myObject,
    "age",
    {
        enumerable: true,
        value: 41
    });

Object.defineProperty(
    myObject,
    "middleName",
    {
        enumerable: false,
        value: "William"
    });

Object
    .entries(myObject) //?
    .map(([ k, v ]) => `${k} is ${v}`)
    .join("; "); //?
