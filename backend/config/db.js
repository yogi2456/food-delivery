import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://yogeshsagaluri:8328269513@cluster0.6k9rgdr.mongodb.net/food-del').then(() => console.log("DB Connected"));
}