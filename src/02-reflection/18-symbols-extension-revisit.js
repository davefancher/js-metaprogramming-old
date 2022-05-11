// As mentioned earlier we need access to `this` for these extension methods to work.
// The problem is that working with `this` tends to be problematic because what
// `this` is can be a bit confusing depending on context. For that reason I tend to
// favor arrow functions over classic functions since it removes their dependency on
// that context. With a few small tweaks to the previous code we can allow extending
// our objects with arrow functions rather than classic functions.

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
                    configurable: false,
                    get: function () { return fn(this); }
                }
            );

            return sym;
        };

// We've now abstracted away the nuances of accessing `this` by enclosing it within
// the function we've assigned to the property get descriptor. This does change the
// semantics of the extension function in that they must now be curried functions
// which accept the supplied object and return the function that performs the
// desired task.

const attachSymbolToObjectPrototype =
    attachSymbol(Object.prototype);

// Of course we're not restricted to extending only one object. Here we create a
// function to allow easily extending the String prototype.

const attachSymbolToStringPrototype =
    attachSymbol(String.prototype);

// Now we attach the extension functions like this:

const PIPE =
    attachSymbolToObjectPrototype(target => fn => fn(target));

const TO_UPPER_CASE =
    attachSymbolToStringPrototype(target => () => target.toUpperCase());

// Note how we've switched to arrow functions as discussed earlier. When we invoke one of
// the _attachSymbolXXX_ functions the base `attachSymbol` function invokes the supplied
// extension function passing in the `this` context thus creating another function that
// handles the desired extension logic.

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
    [TO_UPPER_CASE](); //?
