const nullParse = data => {
    return {
        type: "Null",
        data: {
            value: "Null"
        }
    };
};

const undefinedParse = data => {
    return {
        type: "Undefined",
        data: {
            value: "Undefined"
        }
    };
};

const numberParse = data => {
    return {
        type: "Number",
        data: {
            value: data,
            bin: data.toString(2),
            oct: data.toString(8),
            hex: data.toString(16),
            exp: data.toExponential(2)
        }
    };
};

const stringParse = data => {
    return {
        type: "String",
        data: {
            value: data,
            length: data.length
        }
    };
};

const booleanParse = data => {
    return {
        type: "Boolean",
        data: {
            value: data
        }
    };
};

const functionParse = data => {
    return {
        type: "Function",
        data: {
            value: data,
            name: data.name,
            code: data.toString()
        }
    };
};

const dateParse = data => {
    return {
        type: "Date",
        data: {
            value: data
        }
    };
};

const arrayParse = data => {
    return {
        type: "Array",
        data: {
            value: data,
            length: data.length
        }
    };
};

const setParse = data => {
    return {
        type: "Set",
        data: {
            value: data,
            size: data.size
        }
    };
};

const weakSetParse = data => {
    return {
        type: "WeakSet",
        data: {
            value: data
        }
    };
};

const mapParse = data => {
    return {
        type: "Map",
        data: {
            value: data,
            size: data.size
        }
    };
};

const weakMapParse = data => {
    return {
        type: "WeakMap",
        data: {
            value: data
        }
    };
};

const int8arrayParse = data => {
    return {
        type: "Int8Array",
        data: {
            value: data,
            length: data.length,
            bytes: 8 * data.length + "bytes"
        }
    };
};

const uint8arrayParse = data => {
    return {
        type: "UnsignedInt8Array",
        data: {
            value: data,
            length: data.length,
            bytes: 8 * data.length + "bytes"
        }
    };
};

const uint8clampedArrayParse = data => {
    return {
        type: "UnsignedInt8ClampedArray",
        data: {
            value: data,
            length: data.length,
            bytes: 8 * data.length + "bytes"
        }
    };
};

const int16arrayParse = data => {
    return {
        type: "Int16Array",
        data: {
            value: data,
            length: data.length,
            bytes: 16 * data.length + "bytes"
        }
    };
};

const uint16arrayParse = data => {
    return {
        type: "UnsignedInt16Array",
        data: {
            value: data,
            length: data.length,
            bytes: 16 * data.length + "bytes"
        }
    };
};

const int32arrayParse = data => {
    return {
        type: "Int32Array",
        data: {
            value: data,
            length: data.length,
            bytes: 32 * data.length + "bytes"
        }
    };
};

const uint32arrayParse = data => {
    return {
        type: "UnsignedInt32Array",
        data: {
            value: data,
            length: data.length,
            bytes: 32 * data.length + "bytes"
        }
    };
};

const float32arrayParse = data => {
    return {
        type: "Float32Array",
        data: {
            value: data,
            length: data.length,
            bytes: 32 * data.length + "bytes"
        }
    };
};

const float64arrayParse = data => {
    return {
        type: "Float32Array",
        data: {
            value: data,
            length: data.length,
            bytes: 64 * data.length + "bytes"
        }
    };
};

const objectParse = data => {
    return {
        type: "Object",
        data: {
            value: data
        }
    };
};

const whatIs = data => {
    if (data === null) {
        return "null";
    } else if (data === undefined) return "undefined";
    else if (typeof data === "number") return "number";
    else if (typeof data === "string") return "string";
    else if (typeof data === "boolean") return "boolean";
    else if (typeof data === "function") return "function";
    else if (data instanceof Date) return "date";
    else if (data instanceof Array) return "array";
    else if (data instanceof Set) return "set";
    else if (data instanceof WeakSet) return "weakset";
    else if (data instanceof Map) return "map";
    else if (data instanceof WeakMap) return "weakmap";
    else if (data instanceof Int8Array) return "int8array";
    else if (data instanceof Uint8Array) return "uint8array";
    else if (data instanceof Uint8ClampedArray) return "uint8clampedarray";
    else if (data instanceof Int16Array) return "int16array";
    else if (data instanceof Uint16Array) return "uint16array";
    else if (data instanceof Int32Array) return "int32array";
    else if (data instanceof Uint32Array) return "uint32array";
    else if (data instanceof Float32Array) return "float32array";
    else if (data instanceof Float64Array) return "float64array";
    else return "object";
};

const parseOf = {
    undefined: undefinedParse,
    number: numberParse,
    string: stringParse,
    boolean: booleanParse,
    function: functionParse,
    date: dateParse,
    array: arrayParse,
    set: setParse,
    weakset: weakSetParse,
    map: mapParse,
    weakmap: weakMapParse,
    int8array: int8arrayParse,
    uint8array: uint8arrayParse,
    uint8clampedarray: uint8clampedArrayParse,
    int16array: int16arrayParse,
    uint16array: uint16arrayParse,
    int32array: int32arrayParse,
    uint32array: uint32arrayParse,
    float32array: float32arrayParse,
    float64array: float64arrayParse
};

const parse = data => {
    const type = whatIs(data);
    return parseOf[type](data);
};

module.exports = parse;
