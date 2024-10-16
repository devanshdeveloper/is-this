# IsThis
IsThis is a TypeScript utility class that provides a collection of type-checking methods to help determine the type of a variable or object. With simple and efficient checks for primitive types, complex structures, and custom types, IsThis makes it easier to write robust and maintainable TypeScript code.

## Features
 - Type Guards: Use type guards to narrow down types in TypeScript, improving type safety.
 - Comprehensive Checks: Includes checks for various data types including strings, numbers, arrays, objects, functions, and more.
 - Custom Type Checking: Allows for checking against user-defined types and constructors.
 - Data Structure Checks: Efficient checks for data structures like Maps, Sets, WeakMaps, WeakSets, and more.
 - String Validation: Validates strings against common formats, such as email, UUID, hex colors, and phone numbers.
 - Utilities for Arrays and Objects: Functions for checking empty arrays and objects, as well as deep equality checks.


## Installation
To install the package, you can use npm:

npm install is-this

## Usage
Import the IsThis class and create an instance to start using the type-checking methods:

```typescript
import IsThis from 'is-this';

const isThis = new IsThis();

console.log(isThis.isString("Hello")); // true
console.log(isThis.isNumber(42)); // true
console.log(isThis.isArray([])); // true
console.log(isThis.isObject({})); // true
console.log(isThis.isValidEmail("example@example.com")); // true
console.log(isThis.isUUID("123e4567-e89b-12d3-a456-426614174000")); // true
```

## Available Methods
Here’s a quick overview of the available methods in the IsThis class:

### Type Checks

 - isString(value: any): value is string
 - isNumber(value: any): value is number
 - isBoolean(value: any): value is boolean
 - isArray(value: any): value is any[]
 - isObject(value: any): value is object
 - isFunction(value: any): value is Function
 - isNull(value: any): value is null
 - isUndefined(value: any): value is undefined
 - isBigInt(value: any): value is bigint
 - isDate(value: any): value is Date
 - isPromise(value: any): boolean
 - isError(value: any): value is Error
 - isWeakMap(value: any): value is WeakMap<any, any>
 - isWeakSet(value: any): value is WeakSet<any>
 - isSymbol(value: any): boolean

### Array and Object Checks

 - isEmptyArray(value: any): boolean
 - isNonEmptyArray(value: any): boolean
 - isEmptyObject(value: any): boolean
 - isObjectWithKeys(value: any, keys: string[]): boolean


### String Validation

 - isValidEmail(value: any): boolean
 - isUUID(value: any): boolean
 - isHexColor(value: any): boolean
 - isPhoneNumber(value: any): boolean

### Number Checks

 - isInt(value: any): boolean
 - isFloat(value: any): boolean
 - isPositiveInteger(value: any): boolean
 - isNegativeInteger(value: any): boolean
 - isInfinity(value: any): boolean


### Miscellaneous

 - isDateString(value: any): boolean
 - isDeepEqual(a: any, b: any): boolean
 - isURL(value: any): boolean
 - isIterable(value: any): boolean
## Contributing
Contributions are welcome! If you would like to contribute to this project, please open an issue or submit a pull request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.