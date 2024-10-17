# isThis - Comprehensive Type and Value Checking Utility

isThis is a robust utility library for performing type and value checks in JavaScript and TypeScript. It provides an extensive range of methods to validate primitive types, collections, strings, numbers, dates, and more. Whether you're checking if a value is a string, verifying if a number is prime, or validating if an object has specific keys, isThis offers easy-to-use methods to cover all these scenarios and more.

## Features

 - Primitive Type Checks: Verify basic types like strings, numbers, booleans, null, undefined, and more.
 - Collection Type Checks: Detect arrays, objects, maps, sets, weakmaps, weaksets, and typed arrays.
 - Number Validation: Perform specific checks on numbers such as integers, floats, even, odd, prime, Fibonacci, divisibility, etc.
 - String Validation: Check if strings are empty, valid UUIDs, hex colors, valid email addresses, phone numbers, IPv4/IPv6 addresses, and more.
 - Object Validation: Validate objects for keys, methods, and prototype inheritance, as well as check if objects are frozen, sealed, or extensible.
 - Array Validation: Perform checks for empty or non-empty arrays, arrays of a specific type, arrays with unique elements, and subsets.
 - Date Validation: Check if dates are valid, in the past, future, or today/tomorrow, and if a year is a leap year.
 - Miscellaneous: Includes checks for URLs, MIME types, mobile devices, environments (development/production), iterables, errors, and more.

## Installation

You can easily add isThis to your project using npm:

```bash
npm i @devanshdeveloper/is-this
```

## Usage

First, import the isThis library in your JavaScript or TypeScript file:

```typescript
import isThis from 'is-this';
```

Now you can use any of the methods provided by isThis to perform type or value checks. Here are some examples:

### Primitive Type Checks

```typescript
isThis.isString('Hello, World!'); // true
isThis.isNumber(42); // true
isThis.isBoolean(false); // true
isThis.isNull(null); // true
isThis.isUndefined(undefined); // true
isThis.isBigInt(123n); // true
isThis.isSymbol(Symbol()); // true
```

### Collection Type Checks

```typescript
isThis.isArray([1, 2, 3]); // true
isThis.isObject({ key: 'value' }); // true
isThis.isFunction(() => {}); // true
isThis.isMap(new Map()); // true
isThis.isSet(new Set()); // true
```

### Number Validation

```typescript
isThis.isInt(123); // true
isThis.isPrime(7); // true
isThis.isEven(8); // true
isThis.isFibonacci(8); // true
isThis.isDivisibleBy(10, 2); // true
isThis.isSafeInteger(Number.MAX_SAFE_INTEGER); // true
```

### String Validation

```typescript
isThis.isEmptyString(''); // true
isThis.isUUID('550e8400-e29b-41d4-a716-446655440000'); // true
isThis.isValidEmail('test@example.com'); // true
isThis.isHexColor('#ff5733'); // true
isThis.isPhoneNumber('+1234567890'); // true
```

### Object Validation

```typescript
isThis.isEmptyObject({}); // true
isThis.isObjectWithKeys({ name: 'John' }, ['name']); // true
isThis.isPlainObject({ key: 'value' }); // true
isThis.isFrozen(Object.freeze({})); // true
```

### Array Validation

```typescript
isThis.isEmptyArray([]); // true
isThis.isArrayOfStrings(['apple', 'banana']); // true
isThis.isArrayOfUniqueElements([1, 2, 3]); // true
isThis.isSubset([1, 2], [1, 2, 3, 4]); // true
```

### Date Validation

```typescript
isThis.isDate(new Date()); // true
isThis.isPastDate(new Date('2020-01-01')); // true
isThis.isLeapYear(2024); // true
isThis.isToday(new Date()); // true
```

### Miscellaneous Checks

```typescript
isThis.isURL('https://example.com'); // true
isThis.isMobileDevice(); // Detects if running on a mobile device
isThis.isBrowser(); // Detects if running in a browser environment
isThis.isRegExp(/abc/); // true
```

## API Methods

The library contains over 150+ methods across various categories to cover most validation needs:

 - Primitive Type Checks: isString, isNumber, isBoolean, isNull, isUndefined, isBigInt, isSymbol, etc.
 - Collection Type Checks: isArray, isObject, isFunction, isMap, isSet, isWeakMap, etc.
 - Number Checks: isInt, isFloat, isPrime, isEven, isOdd, isSafeInteger, isPerfectSquare, isFibonacci, etc.
 - String Checks: isEmptyString, isUUID, isValidEmail, isPhoneNumber, isIPv4, isIPv6, isMACAddress, isPalindrome, etc.
 - Object Checks: isEmptyObject, isPlainObject, hasProperty, isFrozen, isSealed, etc.
 - Array Checks: isEmptyArray, isArrayOfType, isSubset, isArrayOfUniqueElements, etc.
 - Date Checks: isDate, isPastDate, isFutureDate, isToday, isLeapYear, etc.
 - Miscellaneous Checks: isURL, isMobileDevice, isRegExp, isBrowser, etc.

For a full list of methods and detailed examples, please refer to the source code in @devanshdeveloper/isThis/src/index.ts.

## Contributions
Contributions, issues, and feature requests are welcome! Feel free to submit a pull request or create an issue.