import delay from '../../../utils/delay';
import { usersMockDB } from './mock';

export default async (id: string) => {
  await delay();

  const userIndex = usersMockDB.findIndex(user => user.id === id);

  usersMockDB.splice(userIndex, 1);
};
