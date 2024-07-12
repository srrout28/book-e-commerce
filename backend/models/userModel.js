import mongoose from "mongoose";
// User Model...
const userShema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    image: { type: String},
    cartData: { type: Object, default: {} }
}, { minimize: false });

const userModel = mongoose.models.user || mongoose.model("User", userShema);

export default userModel;