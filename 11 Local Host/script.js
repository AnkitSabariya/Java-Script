function handleclick() {
    localStorage.setItem("a","ankitsabariya")
    
}
// Option 2
let temp = localStorage.getItem("a");
  document.getElementById("h1").innerText = `Name from storage: ${temp}`;