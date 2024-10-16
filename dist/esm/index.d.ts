declare class IsThis {
    isString(value: any): value is string;
    isNumber(value: any): value is number;
    isBoolean(value: any): value is boolean;
    isNull(value: any): value is null;
    isUndefined(value: any): value is undefined;
    isNullOrUndefined(value: any): boolean;
    isBigInt(value: any): value is bigint;
    isSymbol(value: any): value is symbol;
    isArray(value: any): value is any[];
    isObject(value: any): value is object;
    isFunction(value: any): value is Function;
    isHTMLElement(value: any): boolean;
    isMap(value: any): boolean;
    isSet(value: any): boolean;
    isWeakMap(value: any): value is WeakMap<any, any>;
    isWeakSet(value: any): value is WeakSet<any>;
    isPromise(value: any): boolean;
    isArrayBuffer(value: any): value is ArrayBuffer;
    isTypedArray(value: any): boolean;
    isBlob(value: any): value is Blob;
    isFile(value: any): value is File;
    isDataView(value: any): value is DataView;
    isInt(value: any): boolean;
    isFloat(value: any): boolean;
    isFiniteNumber(value: any): boolean;
    isInfinity(value: any): boolean;
    isEmptyString(value: any): boolean;
    isNumberString(value: any): boolean;
    isBooleanString(value: any): boolean;
    isDateString(value: any): boolean;
    isUUID(value: any): boolean;
    isHexColor(value: any): boolean;
    isPhoneNumber(value: any): boolean;
    isValidEmail(value: any): boolean;
    isEmptyObject(value: any): boolean;
    isObjectWithKeys(value: any, keys: string[]): boolean;
    isEmptyArray(value: any): boolean;
    isNonEmptyArray(value: any): boolean;
    isArrayLike(value: any): boolean;
    isDeepEqual(a: any, b: any): boolean;
    isRegExp(value: any): boolean;
    isURL(value: any): boolean;
    isIterable(value: any): boolean;
    isAsyncFunction(value: any): boolean;
    isPromiseLike(value: any): boolean;
    isUserDefinedType(value: any, constructor: Function): boolean;
    isFunctionType(value: any, constructor: Function): boolean;
}
declare const isThis: IsThis;
