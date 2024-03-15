// Addition
function addition(a, b) {
    return a + b;
}

// Subtraction
function subtraction(a, b) {
    return a - b;
}

// Division
function division(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is possible");
    }
    return a / b;
}

// Multiplication
function multiplication(a, b) {
    return a * b;
}

// Exporting the functions 
module.exports = {
    addition,
    subtraction,
    division,
    multiplication
};
