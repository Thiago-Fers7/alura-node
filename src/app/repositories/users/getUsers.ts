import delay from '../../../utils/delay';
import { usersMockDB } from './mock';

export default async () => {
  await delay(500);

  return usersMockDB;
};
