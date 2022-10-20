import { User } from '../../../database/users';

export default async (id: string) => {
  const user = User.findById(id);

  return user;
};
