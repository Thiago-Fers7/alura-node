import { User } from '../../../database/users';

export default async (email: string) => {
  const user = await User.findOne({ email });

  return user;
};
