import delay from "../../../utils/delay";
import { usersMockDB } from "./mock";

interface ICreateUserData {
  name: string;
  email: string;
  password: string;
}

export default async ({ name, email, password }: ICreateUserData) => {
  await delay();

  const user = {
    id: String(Math.random()),
    name,
    email,
    password,
  };

  usersMockDB.push(user);

  return user;
}
