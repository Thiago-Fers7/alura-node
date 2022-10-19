import { usersMockDB } from "./mock";
import delay from "../../../utils/delay";

export default async () => {
  await delay(500);

  return usersMockDB;
}
