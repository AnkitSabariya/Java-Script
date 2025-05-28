// 🌟 5. Nested Function / Lexical Scope
function nested() {
    let outerVar = 5;
    function inner() {
        outerVar++;
        console.log("✅ Nested Function, outerVar:", outerVar);
    }
    inner();
}
nested();

// 🌟 6. Closure Example
function outer() {
    let a = 10;
    function inner() {
        a++;
        console.log("✅ Closure Working, a:", a);
    }
    return inner;
}
let print = outer();
print(); // a = 11
print(); // a = 12
print(); // a = 13
print(); // a = 14