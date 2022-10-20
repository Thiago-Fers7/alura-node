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

userSchema.pre('save', next => {
  next();
});

export const User = model('User', userSchema);

User.createCollection().then(() => {
  console.log('Collection is created!');
});
