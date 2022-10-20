import { CallbackWithoutResult } from 'mongoose';

import { User } from '../../../database/users';

export default async (id: string, callback?: CallbackWithoutResult) => {
  await User.deleteOne({ _id: id }, callback);
};
