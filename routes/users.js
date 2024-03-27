import express from "express";
// import { v4 as uuidv4 } from "uuid";

import {
  getUsers,
  createUser,
  searchUser,
  deleteUser,
  updateUser,
} from "../controllers/users.js";

const router = express.Router();

// export let users = [];

// * All Routes here start with /users
// * => Getting a list of all the users
router.get("/", getUsers);

// * => Creating a new user
router.post("/", createUser);

// * Search a user by ID
router.get("/:id", searchUser);

// * Deleting a user
router.delete("/:id", deleteUser);

// * Updating a User
router.patch("/:id", updateUser);
export default router;
