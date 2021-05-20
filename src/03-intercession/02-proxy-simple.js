// The following function wraps a provided object in a new Proxy instance.

const auditObject =
    obj => {
        const log = [];

        return new Proxy(
            obj,
            {
                get (target, key) {
                    console.log(`Getting ${key} from target`);
                    if (key === "history") return log;
                    return Reflect.get(target, key);
                },
                set (target, key, value) {
                    if (key === "history") {
                        console.log("Cannot rewrite history");
                        return;
                    }

                    console.log(`Setting ${key} to ${value} on target`);
                    Reflect.set(target, key, value);
                    log.push({ key, value, timestamp: new Date() });
                }
            }
        );
    };

// Notice how we've defined only generalized traps here. There are no references to
// property names except history so we can manage it as a virtual property.

const myObject = auditObject({});

myObject.history; //?

myObject.firstName = "Dave";
myObject.lastName = "Fancher";

`${myObject.firstName} ${myObject.lastName}`;

myObject.history; //?

// The lack of property references comes with an added benefit. With Proxy we can set
// arbitrary properties on the underlying object and still have the benefits of the Proxy traps.

myObject.age; //?

myObject.age = 41;

myObject.age; //?

myObject.history;