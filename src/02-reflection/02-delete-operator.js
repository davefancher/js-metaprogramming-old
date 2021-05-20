const myObject = {
    firstName: "Dave",
    lastName: "Fancher",
    age: 41
};

// delete removes a property from an object. The return value is pretty useless because it's almost always true regardless of whether the object was modified.
delete myObject.age; //?
delete myObject.middleName; //?

"firstName" in myObject; //?
"lastName" in myObject; //?
"age" in myObject; //?
