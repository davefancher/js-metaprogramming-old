// The in operator tells us whether a property exists within an object
// or its prototype chain

const myObject = {
    firstName: "Dave",
    lastName: "Fancher",
    age: 42
};

"firstName" in myObject; //?
"lastName" in myObject; //?
"middleName" in myObject; //?



// We can also use the in operator with a for loop to enumerate all of
// an object's properties

const allAttrs = [];

for (attr in myObject) {
    allAttrs.push(attr);
}

allAttrs; //?



// Copy object values

const newObj = {}; //?

for (attr in myObject) {
    newObj[attr] = myObject[attr];
}

newObj; //?
