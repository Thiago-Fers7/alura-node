import delay from '../../../utils/delay';
import { usersMockDB } from './mock';

interface IUpdateUserData {
  name: string;
  email: string;
}

export default async (id: string, { name, email }: IUpdateUserData) => {
  await delay();

  const userIndex = usersMockDB.findIndex(user => user.id === id);

  Object.assign(usersMockDB[userIndex], { name, email });

  return usersMockDB[userIndex];
};
