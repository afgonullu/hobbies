import mongoose from 'mongoose';
import { IHobby } from '../interfaces/IHobby';

const hobbySchema = new mongoose.Schema<IHobby>({
  name: {
    type: String,
    required: true,
    minlength: 5,
  },
  year: {
    type: Number,
    required: true,
  },
  passionLevel: {
    type: String,
    required: true,
  },
});

export default mongoose.model<IHobby>('Hobby', hobbySchema);
