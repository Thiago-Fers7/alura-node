import { User } from '../../../database/users';

export default async () => {
  const users = await User.find();
  return users;
};
