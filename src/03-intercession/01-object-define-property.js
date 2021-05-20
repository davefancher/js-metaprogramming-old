// In our discussion on Symbols we saw that we could provide a function that acts
// as a getter. We can also supply a function that acts as a setter. These two
// functions let us control what happens when an object value is read or written,
// respectively.

// Consider this example which I've adapted from the MDN documentation.

function AuditedObject () {
    const context = {};
    const log = [];

    Object.defineProperty(
        this,
        "firstName",
        {
            enumerable: true,
            get () {
                console.log("Getting context.firstName");
                return context.firstName;
            },
            set (value) {
                console.log(`Setting context.firstName to ${value}`);
                context.firstName = value;
                log.push({ key: "firstName", value, timestamp: new Date() });
            }
        });

    Object.defineProperty(
        this,
        "lastName",
        {
            enumerable: true,
            get () {
                console.log("Getting context.lastName");
                return context.lastName;
            },
            set (value) {
                console.log(`Setting context.lastName to ${value}`);
                context.lastName = value;
                log.push({ key: "lastName", value, timestamp: new Date() });
            }
        });

    Object.defineProperty(
        this,
        "history",
        {
            enumerable: true,
            get () {
                console.log("Getting context history");
                return log;
            }
        });
};

// With the constructor defined we can now create an instance and work with it as we would
// any other object. As we work with the object we'll see that our get and set functions
// are invoked accordingly.

const myObject = new AuditedObject();

myObject.history; //?

myObject.firstName = "Dave";
myObject.lastName = "Fancher";

`${myObject.firstName} ${myObject.lastName}`; //?

myObject.firstName = "David";
myObject.firstName = "JavaScript";
myObject.firstName = "Dave";

myObject.history; //?

// We're not restricted to a single instance either. Each instance will maintain its
// own history so we can track multiple objects

const myOtherObject = new AuditedObject();

myOtherObject.history; //?

myOtherObject.firstName = "John";
myOtherObject.lastName = "Wick";

`${myOtherObject.firstName} ${myOtherObject.lastName}`; //?

myOtherObject.history; //?

// In either case, JavaScript handles the custom logic on property read/write
// and the "client" code is none the wiser.

// A major drawback of this approach is that we need to explicitly define any
// property that we wish to intercept. I can still set an arbitrary property on
// the object but if we haven't defined the property the custom logic won't be
// invoked as we can see in this next example.

myObject.age = 41;

myObject.age; //?

myObject.history; //?

// Fortunately ES6 introduces a much more flexible mechanism. Let's look at that next.