import mongoose from "mongoose";

const LogSchema = new mongoose.Schema({
    process : {
        type: String,
        required: true,
        trim: true,
    },
    ip_adress : {
        type: String,
        required: true,
        trim: true,
    },
    date : {
        type: Date,
        default: Date.now,
    }
});


export default mongoose.model("log", LogSchema);