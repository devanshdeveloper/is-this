class IsThis {
  // ------------------ Primitive Type Checks ------------------

  isString(value: any): value is string {
    return typeof value === "string";
  }

  isNumber(value: any): value is number {
    return typeof value === "number" && !isNaN(value);
  }

  isBoolean(value: any): value is boolean {
    return typeof value === "boolean";
  }

  isNull(value: any): value is null {
    return value === null;
  }

  isUndefined(value: any): value is undefined {
    return typeof value === "undefined";
  }

  isNullOrUndefined(value: any): boolean {
    return this.isNull(value) || this.isUndefined(value);
  }

  isBigInt(value: any): value is bigint {
    return typeof value === "bigint";
  }

  isSymbol(value: any): value is symbol {
    return typeof value === "symbol";
  }

  // ------------------ Collection Type Checks ------------------

  isArray(value: any): value is any[] {
    return Array.isArray(value);
  }

  isObject(value: any): value is object {
    return value !== null && typeof value === "object" && !this.isArray(value);
  }

  isFunction(value: any): value is Function {
    return typeof value === "function";
  }

  isHTMLElement(value: any): boolean {
    return value instanceof HTMLElement;
  }

  isMap(value: any): boolean {
    return value instanceof Map;
  }

  isSet(value: any): boolean {
    return value instanceof Set;
  }

  isWeakMap(value: any): value is WeakMap<any, any> {
    return value instanceof WeakMap;
  }

  isWeakSet(value: any): value is WeakSet<any> {
    return value instanceof WeakSet;
  }

  // ------------------ Data Structure Checks ------------------

  isPromise(value: any): boolean {
    return (
      this.isObject(value) &&
      typeof (value as { then?: Function }).then === "function"
    );
  }

  isArrayBuffer(value: any): value is ArrayBuffer {
    return value instanceof ArrayBuffer;
  }

  isTypedArray(value: any): boolean {
    return (
      value instanceof Int8Array ||
      value instanceof Uint8Array ||
      value instanceof Uint8ClampedArray ||
      value instanceof Int16Array ||
      value instanceof Uint16Array ||
      value instanceof Int32Array ||
      value instanceof Uint32Array ||
      value instanceof Float32Array ||
      value instanceof Float64Array ||
      value instanceof BigInt64Array ||
      value instanceof BigUint64Array
    );
  }

  isBlob(value: any): value is Blob {
    return value instanceof Blob;
  }

  isFile(value: any): value is File {
    return value instanceof File;
  }

  isDataView(value: any): value is DataView {
    return value instanceof DataView;
  }

  // ------------------ Number Checks ------------------

  isInt(value: any): boolean {
    return this.isNumber(value) && Number.isInteger(value);
  }

  isFloat(value: any): boolean {
    return this.isNumber(value) && !Number.isInteger(value);
  }

  isFiniteNumber(value: any): boolean {
    return this.isNumber(value) && Number.isFinite(value);
  }

  isInfinity(value: any): boolean {
    return this.isNumber(value) && (value === Infinity || value === -Infinity);
  }

  // ------------------ String Checks ------------------

  isEmptyString(value: any): boolean {
    return this.isString(value) && value.trim().length === 0;
  }

  isNumberString(value: any): boolean {
    return this.isString(value) && !isNaN(Number(value));
  }

  isBooleanString(value: any): boolean {
    return this.isString(value) && (value === "true" || value === "false");
  }

  isDateString(value: any): boolean {
    const date = new Date(value);
    return !isNaN(date.getTime());
  }

  isUUID(value: any): boolean {
    return (
      this.isString(value) &&
      /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(
        value
      )
    );
  }

  isHexColor(value: any): boolean {
    return (
      this.isString(value) && /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(value)
    );
  }

  isPhoneNumber(value: any): boolean {
    return this.isString(value) && /^\+?[1-9]\d{1,14}$/.test(value);
  }

  isValidEmail(value: any): boolean {
    return this.isString(value) && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  // ------------------ Object Checks ------------------

  isEmptyObject(value: any): boolean {
    return this.isObject(value) && Object.keys(value).length === 0;
  }

  isObjectWithKeys(value: any, keys: string[]): boolean {
    return this.isObject(value) && keys.every((key) => key in value);
  }

  // ------------------ Array Checks ------------------

  isEmptyArray(value: any): boolean {
    return this.isArray(value) && value.length === 0;
  }

  isNonEmptyArray(value: any): boolean {
    return this.isArray(value) && value.length > 0;
  }

  isArrayLike(value: any): boolean {
    return (
      value != null &&
      typeof value === "object" &&
      "length" in value &&
      Number.isInteger(value.length)
    );
  }

  // ------------------ Comparison Checks ------------------

  isDeepEqual(a: any, b: any): boolean {
    return JSON.stringify(a) === JSON.stringify(b);
  }

  // ------------------ Miscellaneous Checks ------------------

  isRegExp(value: any): boolean {
    return value instanceof RegExp;
  }

  isURL(value: any): boolean {
    try {
      new URL(value);
      return true;
    } catch {
      return false;
    }
  }

  isIterable(value: any): boolean {
    return value != null && typeof value[Symbol.iterator] === "function";
  }

  isAsyncFunction(value: any): boolean {
    return (
      value instanceof Function && value.constructor.name === "AsyncFunction"
    );
  }

  isPromiseLike(value: any): boolean {
    return (
      value && typeof value === "object" && typeof value.then === "function"
    );
  }

  isUserDefinedType(value: any, constructor: Function): boolean {
    return value instanceof constructor;
  }

  isFunctionType(value: any, constructor: Function): boolean {
    return typeof value === "function" && value.constructor === constructor;
  }
}

export default IsThis;
