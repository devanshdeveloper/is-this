class IsThis {
    isString(value) {
        return typeof value === "string";
    }
    isNumber(value) {
        return typeof value === "number" && !isNaN(value);
    }
    isBoolean(value) {
        return typeof value === "boolean";
    }
    isArray(value) {
        return Array.isArray(value);
    }
    isObject(value) {
        return value !== null && typeof value === "object" && !this.isArray(value);
    }
    isFunction(value) {
        return typeof value === "function";
    }
    isNull(value) {
        return value === null;
    }
    isUndefined(value) {
        return typeof value === "undefined";
    }
    isBigInt(value) {
        return typeof value === "bigint";
    }
    isDate(value) {
        return value instanceof Date;
    }
    isPromise(value) {
        return (this.isObject(value) &&
            typeof value.then === "function");
    }
    isError(value) {
        return value instanceof Error;
    }
    isWeakMap(value) {
        return value instanceof WeakMap;
    }
    isWeakSet(value) {
        return value instanceof WeakSet;
    }
    isInt(value) {
        return this.isNumber(value) && Number.isInteger(value);
    }
    isFloat(value) {
        return this.isNumber(value) && !Number.isInteger(value);
    }
    isFiniteNumber(value) {
        return this.isNumber(value) && Number.isFinite(value);
    }
    isNaNValue(value) {
        return Number.isNaN(value);
    }
    isHTMLElement(value) {
        return value instanceof HTMLElement;
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
    isFile(value) {
        return value instanceof File;
    }
    isBlob(value) {
        return value instanceof Blob;
    }
    isDataView(value) {
        return value instanceof DataView;
    }
    isInfinity(value) {
        return this.isNumber(value) && (value === Infinity || value === -Infinity);
    }
    isElement(value) {
        return value instanceof Element;
    }
    isNode(value) {
        return value instanceof Node;
    }
    isJSON(value) {
        try {
            JSON.parse(value);
            return true;
        }
        catch (e) {
            return false;
        }
    }
    isValidEmail(value) {
        return this.isString(value) && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }
    isPrimitive(value) {
        return (value === null ||
            ["string", "number", "boolean", "symbol", "undefined", "bigint"].includes(typeof value));
    }
    isHTMLElementType(value, type) {
        return (value instanceof Element &&
            value.tagName.toLowerCase() === type.toLowerCase());
    }
    isUserDefinedType(value, constructor) {
        return value instanceof constructor;
    }
    isFunctionType(value, constructor) {
        return typeof value === "function" && value.constructor === constructor;
    }
    isAsyncFunction(value) {
        return (value instanceof Function && value.constructor.name === "AsyncFunction");
    }
    isPromiseLike(value) {
        return (value && typeof value === "object" && typeof value.then === "function");
    }
    isEmptyArray(value) {
        return this.isArray(value) && value.length === 0;
    }
    isNumberString(value) {
        return this.isString(value) && !isNaN(Number(value));
    }
    isBooleanString(value) {
        return this.isString(value) && (value === "true" || value === "false");
    }
    isNullOrUndefined(value) {
        return this.isNull(value) || this.isUndefined(value);
    }
    isFiniteNumberString(value) {
        return this.isString(value) && isFinite(Number(value));
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
    isPositiveInteger(value) {
        return this.isNumber(value) && Number.isInteger(value) && value > 0;
    }
    isNegativeInteger(value) {
        return this.isNumber(value) && Number.isInteger(value) && value < 0;
    }
    isEmptyString(value) {
        return this.isString(value) && value.trim().length === 0;
    }
    isObjectWithKeys(value, keys) {
        return this.isObject(value) && keys.every((key) => key in value);
    }
    isDeepEqual(a, b) {
        return JSON.stringify(a) === JSON.stringify(b);
    }
    isRegExp(value) {
        return value instanceof RegExp;
    }
    isEmptyObject(value) {
        return this.isObject(value) && Object.keys(value).length === 0;
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
    isMap(value) {
        return value instanceof Map;
    }
    isSet(value) {
        return value instanceof Set;
    }
    isSymbol(value) {
        return typeof value === "symbol";
    }
    isArrayLike(value) {
        return (value != null &&
            typeof value === "object" &&
            "length" in value &&
            Number.isInteger(value.length));
    }
    isNonEmptyArray(value) {
        return this.isArray(value) && value.length > 0;
    }
}
export default IsThis;
//# sourceMappingURL=index.js.map