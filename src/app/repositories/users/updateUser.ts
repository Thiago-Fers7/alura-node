import { User } from '../../../database/users';

interface IUpdateUserData {
  name: string;
  email: string;
}

export default async (id: string, { name, email }: IUpdateUserData) => {
  const userUpdated = await User.updateOne(
    { _id: id },
    { name, email },
    {},
    (erro, doc) => {
      console.log(doc);
    },
  );

  console.log(userUpdated);

  return userUpdated;
};
