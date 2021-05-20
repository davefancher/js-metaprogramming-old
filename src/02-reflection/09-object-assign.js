// Object.assign makes a shallow copy of an existing object

const myObject = {
    firstName: "Dave",
    lastName: "Fancher"
};

// The target object is the first argument
const myClone = Object.assign({}, myObject);

myObject; //?
myClone; //?

// We can add properties to the clone without affecting the original
myClone.age = 41;

myObject; //?
myClone; //?



// We can also use assign to merge multiple objects into one. Note that
// any properties on the target object will be overwritten if a property
// with the same name is found on any of the source objects

const myProfile = {
    address: { city: "Carmel", state: "IN" }
};

const mergedObject =
    Object.assign(
        { firstName: "David" },
        myClone,
        myProfile); //?

// Since the resulting object is a shallow copy only references are copied therefore
// changing the source object will result in changing the target object

myProfile.address.city = "Fishers";

myProfile; //?
mergedObject; //?
