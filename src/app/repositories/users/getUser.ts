import delay from "../../../utils/delay";
import { usersMockDB } from "./mock";

export default async (id: string) => {
  await delay();

  const user = usersMockDB.find((user) => user.id === id);

  return user;
}
