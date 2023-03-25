import mongoose from "mongoose";

const ExperienceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  company_name: {
    type: String,
    required: true,
    trim: true,
  },
  icon : {
    type: String,
    required: true,
    trim: true,
  },
  iconBg: {
    type: String,
    required: true,
    trim: true,
  },
  work_date: {
    type: String,
    required: true,
    trim: true,
  },
  points: {
    type: Array,
    required: true,
    trim: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("experiences", ExperienceSchema);
