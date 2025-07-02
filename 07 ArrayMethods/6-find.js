const users = [
    { id: 1, name: "Ankit" },
    { id: 2, name: "Ravi" },
    { id: 3, name: "Sana" }
  ];
  
  const result = users.find(user => user.id === 2);
  
  console.log(result); // Output: { id: 2, name: "Ravi" }
  