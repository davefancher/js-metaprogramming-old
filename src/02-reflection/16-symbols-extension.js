// We can take advantage of symbols to provide our own extensibility points in our code. I've
// successfully used this technique to provide a rough equivalent of C#'s extension methods
// in JavaScript thus enabling incredibly useful features such as functional pipelining.

// Consider the following:

const attachSymbol =
    target =>
        fn => {
            const sym = Symbol();

            Reflect.defineProperty(
                target,
                sym,
                {
                    enumerable: false,
                    writable: false,
                    configurable: false,
                    value: fn
                }
            );

            return sym;
        };

// The attachSymbol function is a curried function that allows us to specify
// an object to extend with a function attached by a Symbol. Using this function
// generally looks like this:

const attachSymbolToObjectPrototype =
    attachSymbol(Object.prototype);

// We'd then attach a function like this:

const PIPE =
    attachSymbolToObjectPrototype(
        function (fn) {
            return fn(this);
        });

// We've now attached a Symbol we're calling PIPE to Object.prototype and are free
// to start using it.

({
    firstName: "Dave",
    lastName: "Fancher"
})
    [PIPE](o => ({
        fname: o.firstName,
        lname: o.lastName,
        time: new Date()
    }))
    [PIPE](o => `[${o.time.toISOString()}] ${o.lname}, ${o.fname}`)
    [PIPE](s => s.toUpperCase()); //?
