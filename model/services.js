import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema({
    title: {
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

export default mongoose.model("services", ServiceSchema);