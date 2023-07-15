import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, "Name is Required"],
        maxlength: [50, "Name must be less than 50"]
    }
}
)