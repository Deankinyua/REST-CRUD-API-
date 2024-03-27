import { v4 as uuidv4 } from "uuid";

let users = [];
export const getUsers = (req, res) => {
  console.log(users);
  res.send(users);
};

export const createUser = (req, res) => {
  const user = req.body;

  let userWithId = {
    ...user,
    id: uuidv4(),
  };

  users.push(userWithId);
  console.log(users);
  res.send("user added successfully");
};

export const searchUser = (req, res) => {
  users.forEach((user) => {
    if (req.params.id === user.id) {
      res.send(user);
      console.log(user);
    } else {
      res.send(`user with the id ${req.params.id} was not found`);
      console.log("User Not Found");
    }
  });
};

export const deleteUser = (req, res) => {
  users = users.filter((user) => req.params.id !== user.id);
  res.send(`user with id: ${req.params.id} Deleted`);
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  let { firstName, lastName, age } = req.body;

  const user = users.find((user) => user.id === id);

  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
  if (age) user.age = age;

  res.send(user);
};
