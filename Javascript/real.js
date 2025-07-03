setInterval(() => {
    const now = new Date();

    console.log("Hour:", now.getHours());               // 0–23
    console.log("Minute:", now.getMinutes());           // 0–59
    console.log("Second:", now.getSeconds());           // 0–59
    console.log("Day:", now.getDate());                 // 1–31
    console.log("Month:", now.getMonth());              // 0–11 (Jan = 0)
    console.log("Year:", now.getFullYear());            // 4-digit year
    console.log("Weekday:", now.getDay());              // 0–6 (Sun = 0)
    console.log("Locale Time:", now.toLocaleTimeString()); // e.g. 03:15:22 PM
    console.log("-------------------------------");

  }, 1000);