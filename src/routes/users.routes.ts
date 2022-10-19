import { Router } from "express";
import getUser from "../app/controllers/users/getUser";
import getUsers from "../app/controllers/users/getUsers";
import createUser from "../app/controllers/users/createUser";
import deleteUser from "../app/controllers/users/deleteUser";
import updateUser from "../app/controllers/users/updateUser";
import getUserByEmail from "../app/controllers/users/getUserByEmail";

const usersRoutes = Router();

usersRoutes
  .get('/', getUsers)
  .get('/:id', getUser)
  .get('/email/:email', getUserByEmail)
  .post('/', createUser)
  .put('/:id', updateUser)
  .delete('/:id', deleteUser)

export default usersRoutes;
