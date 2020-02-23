import mongoose from 'mongoose';

const ScoreboardSchema = new mongoose.Schema(
  {
    token: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    score: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Scoreboard', ScoreboardSchema);
