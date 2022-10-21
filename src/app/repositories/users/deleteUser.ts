import { User } from '../../../database/users';

export default async (id: string) => {
  await User.deleteOne({ _id: id });
};
