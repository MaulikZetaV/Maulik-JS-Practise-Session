// Fetch API
// GET Request
async function getUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);
}

getUsers();

// Handling HTTP Error
async function getUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!response.ok) {
    throw new Error("HTTP Error: " + response.status);
  }

  const data = await response.json();
  console.log(data);
}

