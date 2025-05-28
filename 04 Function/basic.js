// 🌟 1. Normal Function
function normal() {
    console.log("✅ I'm a Normal Function");
}
normal();

// 🌟 2. Anonymous function (Variable as Function)
let variable = function () {
    console.log("✅ I'm a Function stored in a Variable");
};
variable();

// 🌟 3. IIFE – Immediately Invoked Function Expression
(function without() {
    console.log("✅ I'm an IIFE (Immediately Invoked Function)");
})();

// 🌟 4. Arrow Function
let arrowFunc = () => {
    console.log("✅ I'm an Arrow Function");
};
arrowFunc();


