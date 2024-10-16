class IsThis {
    // ------------------ Primitive Type Checks ------------------
    isString(value) {
        return typeof value === "string";
    }
    isNumber(value) {
        return typeof value === "number" && !isNaN(value);
    }
    isBoolean(value) {
        return typeof value === "boolean";
    }
    isNull(value) {
        return value === null;
    }
    isUndefined(value) {
        return typeof value === "undefined";
    }
    isNullOrUndefined(value) {
        return this.isNull(value) || this.isUndefined(value);
    }
    isBigInt(value) {
        return typeof value === "bigint";
    }
    isSymbol(value) {
        return typeof value === "symbol";
    }
    // ------------------ Collection Type Checks ------------------
    isArray(value) {
        return Array.isArray(value);
    }
    isObject(value) {
        return value !== null && typeof value === "object" && !this.isArray(value);
    }
    isFunction(value) {
        return typeof value === "function";
    }
    isHTMLElement(value) {
        return value instanceof HTMLElement;
    }
    isMap(value) {
        return value instanceof Map;
    }
    isSet(value) {
        return value instanceof Set;
    }
    isWeakMap(value) {
        return value instanceof WeakMap;
    }
    isWeakSet(value) {
        return value instanceof WeakSet;
    }
    // ------------------ Data Structure Checks ------------------
    isPromise(value) {
        return (this.isObject(value) &&
            typeof value.then === "function");
    }
    isArrayBuffer(value) {
        return value instanceof ArrayBuffer;
    }
    isTypedArray(value) {
        return (value instanceof Int8Array ||
            value instanceof Uint8Array ||
            value instanceof Uint8ClampedArray ||
            value instanceof Int16Array ||
            value instanceof Uint16Array ||
            value instanceof Int32Array ||
            value instanceof Uint32Array ||
            value instanceof Float32Array ||
            value instanceof Float64Array ||
            value instanceof BigInt64Array ||
            value instanceof BigUint64Array);
    }
    isBlob(value) {
        return value instanceof Blob;
    }
    isFile(value) {
        return value instanceof File;
    }
    isDataView(value) {
        return value instanceof DataView;
    }
    // ------------------ Number Checks ------------------
    isInt(value) {
        return this.isNumber(value) && Number.isInteger(value);
    }
    isFloat(value) {
        return this.isNumber(value) && !Number.isInteger(value);
    }
    isFiniteNumber(value) {
        return this.isNumber(value) && Number.isFinite(value);
    }
    isInfinity(value) {
        return this.isNumber(value) && (value === Infinity || value === -Infinity);
    }
    // ------------------ String Checks ------------------
    isEmptyString(value) {
        return this.isString(value) && value.trim().length === 0;
    }
    isNumberString(value) {
        return this.isString(value) && !isNaN(Number(value));
    }
    isBooleanString(value) {
        return this.isString(value) && (value === "true" || value === "false");
    }
    isDateString(value) {
        const date = new Date(value);
        return !isNaN(date.getTime());
    }
    isUUID(value) {
        return (this.isString(value) &&
            /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(value));
    }
    isHexColor(value) {
        return (this.isString(value) && /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(value));
    }
    isPhoneNumber(value) {
        return this.isString(value) && /^\+?[1-9]\d{1,14}$/.test(value);
    }
    isValidEmail(value) {
        return this.isString(value) && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }
    // ------------------ Object Checks ------------------
    isEmptyObject(value) {
        return this.isObject(value) && Object.keys(value).length === 0;
    }
    isObjectWithKeys(value, keys) {
        return this.isObject(value) && keys.every((key) => key in value);
    }
    // ------------------ Array Checks ------------------
    isEmptyArray(value) {
        return this.isArray(value) && value.length === 0;
    }
    isNonEmptyArray(value) {
        return this.isArray(value) && value.length > 0;
    }
    isArrayLike(value) {
        return (value != null &&
            typeof value === "object" &&
            "length" in value &&
            Number.isInteger(value.length));
    }
    // ------------------ Comparison Checks ------------------
    isDeepEqual(a, b) {
        return JSON.stringify(a) === JSON.stringify(b);
    }
    // ------------------ Miscellaneous Checks ------------------
    isRegExp(value) {
        return value instanceof RegExp;
    }
    isURL(value) {
        try {
            new URL(value);
            return true;
        }
        catch {
            return false;
        }
    }
    isIterable(value) {
        return value != null && typeof value[Symbol.iterator] === "function";
    }
    isAsyncFunction(value) {
        return (value instanceof Function && value.constructor.name === "AsyncFunction");
    }
    isPromiseLike(value) {
        return (value && typeof value === "object" && typeof value.then === "function");
    }
    isUserDefinedType(value, constructor) {
        return value instanceof constructor;
    }
    isFunctionType(value, constructor) {
        return typeof value === "function" && value.constructor === constructor;
    }
}
export default { isThis: new IsThis() };
//# sourceMappingURL=index.js.map