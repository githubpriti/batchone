import mongoose from "mongoose";
import AuthRoles from "../utils/authRoles"
const userSchema = mongoose.Schema(
    {
    name:{
        type: String,
        required: [true, "Name is Required"],
        maxlength: [50, "Name must be less than 50"]
    },
    email: {
        type: String,
        require: [true, "Email is Required"],
        unique: true,
    },
    password: {
        type: String,
        require: [true, "password is Required"],
        minLength: [8, "password must be at least 8 characters"],
        select: false
    },
    role:{
        type: String,
        enum: Object.values(AuthRoles),
        default: AuthRoles.USER
    },
    forgotPasswordToken: String,
    forgotPasswordExpiry: Date,
    },
    {
        timestamps:true
    }
);
export default mongoose.model("User", userSchema);