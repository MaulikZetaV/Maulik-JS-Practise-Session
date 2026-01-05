// 1. Add a New User Immutably in array
const users = [
  { id: 1, name: "Amit" },
  { id: 2, name: "Rahul" },
  { id: 3, name: "Neha" }
];

const newUser = { id: 4, name: "Priya" };

const usersAfterAdd = [...users, newUser];

console.log(usersAfterAdd);


// 2.Update Name of User with id = 2 Immutably
const usersAfterUpdate = users.map(user =>
  user.id === 2
    ? { ...user, name: "Rohit" }
    : user
);

console.log(usersAfterUpdate);

//3. Delete User with id = 1 Immutably
const usersAfterDelete = users.filter(user => user.id !== 1);

console.log(usersAfterDelete);
