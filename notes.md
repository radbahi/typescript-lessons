Types - Easy way to refer to the different properties and functions that a value has.

Primitive types: number, boolean, void, undefined, null, symbol, string
Object types: functions, arrays, classes, objects

Types are used by the Typescript compiler to analyze our code for errors. Types allow other engineers to understand whart values are
floating around our codebase.

You pretty much use types everywhere. Every value you define will have a type associated with it.

Type annotations - Code we add to tell TS what type of value a variable will refer to.

Type inference - TS tries to figure out what type of value a variable refers to. These are used automatically if there's no
annotations.

When to use annotations:

- When we declare a variable on one line then initialize it later
- When we want a variable to have a type that can't be inferred
- When a function returns the 'any' type and we need to clarify the value.
