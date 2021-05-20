// Show some simple code generation using the Function constructor

const sayHello =
    new Function(
        "name",
        "return `[func] Hello, ${name}!`"); //?

sayHello("Dave"); //?
