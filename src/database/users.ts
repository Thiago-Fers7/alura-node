import bcrypt from 'bcrypt';
import { model, Schema } from 'mongoose';

export interface IUser {
  name: string;
  email: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const userSchema = new Schema<IUser>(
  {
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

// eslint-disable-next-line func-names
userSchema.pre('save', async function (next) {
  const passwordModified = await bcrypt.hash(this.password, 10);

  this.password = passwordModified;

  next();
});

export const User = model('User', userSchema);

User.createCollection().then(() => {
  console.log('Collection is created!');
});
