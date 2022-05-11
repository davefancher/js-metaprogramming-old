// Proxy traps extend well beyond custom getters and setters. We can also provide
// traps for other reflection related actions like deleting properties, getting
// descriptors, enumerating properties, and others. Basically, because of the 1:1
// relationship between Reflect functions and Proxy traps, if we can reflect on it
// we can trap it.

// Let's look at an extended version of the `auditObject` function to see a few
// other traps in action.

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
                },
                deleteProperty (target, key) {
                    if (key === "history") {
                        throw new TypeError("Trying to delete history? Really?");
                    }

                    console.log(`Deleting ${key} from target`);
                    Reflect.deleteProperty(target, key);
                },
                has (target, key) {
                    console.log(`Looking for ${key} in target`);
                    return key === "history" || Reflect.has(target, key);
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
// arbitrary properties on the underlying object and still have the benefits of the Proxy
// traps.

myObject.age; //?

myObject.age = 42;

myObject.age; //?

myObject.history;

// The deleteProperty trap is invoked for both Reflect.deleteProperty and the delete
// operator

Reflect.deleteProperty(myObject, "age");
//delete myObject.age;

// To trigger the `has` trap we need only inspect the object with Reflect.has

Reflect.has(myObject, "firstName"); //?
Reflect.has(myObject, "history"); //?
Reflect.has(myObject, "middleName"); //?

// An interesting observation on how Reflect and Proxy interact. Notice how the traps make extensive
// use of the Reflect functions including some of the same functions that spring the traps. This
// shows how the system is intelligent enough to know when something has already been trapped so we
// don't end up in recursive loops.
