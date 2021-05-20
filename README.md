# JS Metaprogramming

Metadata, data about data, is everywhere. We seem to intrinsically understand that using data to further describe the data within our systems brings numerous benefits to taming complexity. It follows then that metaprogramming, programming that interacts with the program itself by inspecting or even manipulating its own code can bring similar benefits to our software.

ES6 greatly expands upon JavaScript's existing metaprogramming capabilities with the Symbol, Reflect, and Proxy types. Through some practical examples we'll discuss the role each of these types play within JavaScript metaprogramming and see how they not only affect your code but even drive several modern language features.

## What is Metaprogramming?

[Wikipedia][1] defines metaprogramming as "...a programming technique in which computer programs have the ability to treat other programs as their data." At a high level this encompasses a variety of techniques including code generation, analysis, and manipulation of existing code.

What we're interested in for the purposes of this discussion are the techniques which allow us to write code that adapts itself to the situation at hand.

Metaprogramming ultimately falls into three categories:

* Generation
* Reflection/Introspection
* Intercession

JavaScript has always supported some degree of metaprogramming, particularly in the areas of code generation and reflection. Many of those "legacy" approaches are still valid and useful but JavaScript has definitely evolved in these areas and now provides several newer types that make metaprogramming much easier and even introduce some new possibilities.

As we explore metaprogramming in JavaScript we'll look at both the old approaches and the new.

## Generation

Code generation is exactly what it sounds like: code writing code. In its simplest form this is passing a string that contains some executable code to the `eval` function (which you should almost never do, by the way).

* [eval][3] - [[Example][5]]
* `Function` constructor [[Example][6]]
* `VM` module (node.js) [[Example][7]]

As useful as these techniques may appear on the surface unless you're specifically trying to run code stored externally (such as custom, user-defined validation rules) there's usually very little reason to use them since there are typically better, safer approaches. And to be perfectly honest, I really struggled to come up with demonstrative examples here because I'd never do the things as demonstrated.

That's not to say that code generation isn't a useful tool in some situations but JavaScript's dynamic nature really minimizes its usefulness.

## Reflection/Introspection

Although code generation in JavaScript might not be terribly useful but the same cannot be said for the other two categories. Let's begin with something else that has been around since JavaScript's earliest days: Reflection.

Reflection, or introspection, allows us to inspect and even modify our programs as they're running! This can include everything from inspecting object structure to determining object types to dynamically modifying data structures.

### Operators

Even in JavaScript's earliest days we had some limited support for _reflective_ programming. This was (and in some cases still is) typically accomplished through some operators. Here are some highlights:

* [`in`][9] operator - returns true or false based on whether a property is present in the object or its prototype chain [[Example][11]]
* [`delete`][4] operator - allows removing a property from an object [[Example][12]]
* [`typeof][10] operator - returns a value's underlying type name but is unreliable. Use other approaches instead. [[Example][13]]

Although the various operators we've discussed certainly have their place they can be cumbersome to work with and definitely follow some obsolete patterns. Fortunately as JavaScript has evolved so has its metaprogramming capabilities.

### `Object` Functions

One key area where reflective programming capabilities have expanded is with the [`Object` type][2] itself. Rather than relying on codifying the metaprogramming capabilities into the language itself with keywords and operators the `Object` type now exposes a variety of reflective and introspective functions. Although not as robust as in other languages this suite of functions enables an impressive range of possibilities in a much more expressive manner. Let's tour some of the more useful and interesting functions.

* Object.defineProperty - provides a more robust interface for adding new properties to an object [[Example][]]
* Object.getOwnPropertyNames/Object.keys - similar yet subtly different functions for listing an object's properties [[Example][]]
* Object.values - gets an array of all values contained in an object [[Example][]]
* Object.entries - gets an array of property key/value pairs from an object [[Example][]]
* Object.fromEntries - initializes an object based on an array of key/value pairs [[Example][]]
* Object.assign - copies properties from one or more source objects into a target object [[Example][]]

### `Reflect` Type

Introduced with ES6, the `Reflect` type defines some alternative reflection and introspection functions to those provided by the `Object` type. What sets the Reflect type's capabilities apart from `Object`'s is that unlike the `Object` functions, the `Reflect` functions are intended to work with some internal things that would otherwise be "hidden" from our code.

Despite the many similarities the `Reflect` functions stand apart from the `Object` functions in that they generally provide more consistent and expected behavior mainly in regard to throwing errors when acting upon types that shouldn't be acted upon in that manner.

Again, some highlights:

* Reflect.defineProperty/Reflect.deleteProperty
* Reflect.get/Reflect.set
* Reflect.ownKeys
* Reflect.has

### `Symbol` Type

Also introduced with ES6, Symbols aren't inherently part of JavaScript metaprogramming but they do factor into it in several important ways. Before we see how Symbols apply to metaprogramming let's first learn about what Symbols are.

<!-- TODO: Describe Symbols -->

Symbols factor into metaprogramming by providing a mechanism by which we can safely extend objects, including the built-in types, without fear of conflicting with existing definitions. This not only gives us a convenient way to add custom functionality but indeed also serves as the basis for numerous modern language mechanisms in a manner similar to that of how .NET interfaces drive C# language features such as `using` and `foreach`.

## Intercession

New to JavaScript with ES6.

* `Proxy` type


<!-- References -->

[1]: https://en.wikipedia.org/wiki/Metaprogramming
[2]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
[3]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval
[4]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete
[5]: ./src/01-code-generation/01-eval.js
[6]: ./src/01-code-generation/02-function-constructor.js
[7]: ./src/01-code-generation/03-vm-module.js
[9]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in
[10]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
[11]: ./src/02-reflection/01-in-operator.js
[12]: ./src/02-reflection/02-delete-operator.js
[13]: ./src/02-reflection/03-typeof-operator.js