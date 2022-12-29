const fun = (value) => {

    const type = typeof value;
    
    if ( type == "number") {
        return `${value} Is a Number`
    }
    else if (type == "boolean") {
        return `${value} Is  a Boolen`
    }
    else if (type == "string") {
        return `${value} Is a String`
    }

}

console.log(fun(999))