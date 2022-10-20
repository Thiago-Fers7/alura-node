import { IUser, User } from '../../../database/users';

export default async ({ name, email, password }: IUser) => {
  const user = new User({
    email,
    name,
    password,
  });

  await user.save();

  return user;
};
