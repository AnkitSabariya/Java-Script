function countdown(n) {
    if (n === 0) {
      console.log("Done!");
      return; // 🟢 Base case
    }
  
    console.log(n);
    countdown(n - 1); // 🔁 Recursive call
  }
  
  countdown(5);
  