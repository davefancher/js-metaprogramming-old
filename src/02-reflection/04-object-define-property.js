// Adds a new property to an object but unlike setting the property with the dot
// or bracket notations this approach gives us more control over various aspects
// of the new property's behavior

const myObject = {
    firstName: "Dave",
    lastName: "Fancher"
};

// Signature:
//   Object.defineProperty(obj, prop, descriptor)

Object.defineProperty(
    myObject,
    "age",
    {
        // Control whether the property will be included when enumerating properties
        //enumerable: true,
        // Control whether the property will be read-only or read-write
        //writable: true
        value: 41,
    });

myObject; //?

// Note that there is no Object function for deleting a property

// Other options for the descriptor include get and set. These start bleeding over to
// intercession so we'll not discuss them here.
