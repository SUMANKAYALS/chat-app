import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`connection sucess full...`)
    } catch (error) {
        console.log("error : " + error);

    }
}