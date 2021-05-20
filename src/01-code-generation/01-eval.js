// Show some simple code generation using the eval function

const sayHello =
    eval("name => `[eval] Hello, ${name}!`;"); //?

sayHello("Dave"); //?


// There be scope/access issues here...

const name = "Dave";

const sayHello2 =
    eval("() => `[eval] Hello, ${name}`");

sayHello2(); //?