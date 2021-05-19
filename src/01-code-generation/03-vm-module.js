// Show some simple code generation using node.js's vm module

const vm = require("vm");

global.testValue = "global";

const script = new vm.Script("name => `[vm - ${testValue} context] Hello, ${name}`;");

const sayHelloThisContext = script.runInThisContext();
sayHelloThisContext("Dave"); //?

const sayHelloNewContext = script.runInNewContext({ testValue: "new" });
sayHelloNewContext("Dave"); //?
