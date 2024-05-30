import mongoose from "mongoose";

const connection: { isConnected?: number } = {};

async function connectDB() {
    if (connection.isConnected) {
        return console.log("Gagal connect database!")
    }

    const db = await mongoose.connect(process.env.MONGODB_URI!);

    connection.isConnected = db.connections[0].readyState;
}

export default connectDB;