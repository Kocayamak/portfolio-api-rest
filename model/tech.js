import mongoose from "mongoose";

const TechSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
        trim: true,
    },
    icon: {
        type: String,
        required: true,
        trim: true,
    },
});


export default mongoose.model("tech", TechSchema);