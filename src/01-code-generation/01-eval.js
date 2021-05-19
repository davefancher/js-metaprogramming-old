// Show some simple code generation using the eval function

const sayHello =
    eval("name => `[eval] Hello, ${name}!`;");

sayHello("Dave"); //?
