import mongoose, { Schema } from 'mongoose';
import { IUser } from '../interfaces/IUser';

const userSchema = new mongoose.Schema<IUser>({
  name: {
    type: String,
    required: true,
    minlength: 5,
  },
  hobbies: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Hobby',
      autopopulate: true,
    },
  ],
});

userSchema.plugin(require('mongoose-autopopulate'));

export default mongoose.model<IUser>('User', userSchema);
