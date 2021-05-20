// Object.getOwnPropertyNames and Object.keys each allow listing the properties
// of an object but do so in subtly different ways with the former returning _all_
// defined properties (including non-enumerable properties) and the later returning
// only enumerable properties

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

Object.getOwnPropertyNames(myObject); //?
Object.keys(myObject); //?
