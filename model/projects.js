import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  source_code_link: {
    type: String,
    required: true,
  },
  tags : {
    type: Array,
    required: true,
  }
});


export default mongoose.model("projects", ProjectSchema);