import mongoose from "mongoose";

const connectDB = () => {
    mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("\x1b[1;34;47m%s\x1b[0m", "Database Connected");
    })
    .catch((e) => {
        console.log("Db connection failed");
        console.log(e);
    });
};

export default connectDB;
