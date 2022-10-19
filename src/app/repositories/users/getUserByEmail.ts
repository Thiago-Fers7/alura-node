import delay from '../../../utils/delay';
import { usersMockDB } from './mock';

export default async (email: string) => {
  await delay();

  return usersMockDB.find(user => user.email === email);
};
