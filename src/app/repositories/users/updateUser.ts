import { User } from '../../../database/users';

interface IUpdateUserData {
  name: string;
  email: string;
}

export default async (id: string, { name, email }: IUpdateUserData) => {
  const userUpdated = await User.findOneAndUpdate(
    { _id: id },
    { name, email },
    { returnDocument: 'after' },
  );

  return userUpdated;
};
