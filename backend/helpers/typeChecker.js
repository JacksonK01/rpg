//Returns the number if valid
export function assertNumber(n) {
    let type = 'number'
    if(typeof n !== type) {
        throw new TypeError(`${n} is not of type ${type}`)
    }
    return n;
}

//Returns the String if valid
export function assertString(s) {
    let type = 'string'
    if(typeof s !== type) {
        throw new TypeError(`${s} is not of type ${type}`)
    }
    return s;
}

//Checks if is an object
export function assertObject(obj, type) {
    if(!(obj instanceof type)) {
        throw new TypeError(`${obj} is not of type ${type}`)
    }
    return obj
}

export function assertFunction(func) {
    let type = 'function'
    if(typeof func !== type) {
        throw new TypeError(`${func} is not of type ${type}`)
    }
    return func;
}

export function assertArray(arr) {
    if(typeof arr !== Array) {
        throw new TypeError(`${arr} is not of type ${Array}`)
    }
    return arr;
}