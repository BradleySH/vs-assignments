
function sum(num1, num2){
    return num1 + num2

}

//expected & actual
const actual = sum(10, 10)
const expected = 20

if(actual !== expected){
    throw new Error(`TEST FAILED: Expected ${expected}, but recieved ${actual}. `)
} else {
    console.log(`TEST PASSED: ${expected} === ${actual}`);
}