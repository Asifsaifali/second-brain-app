import express from "express";
import userRouter from "./routes/user.routes.js";
import dbConnect from "./config/db.config.js";
import dotenv from "dotenv";
dotenv.config();
const env = process.env.NODE_ENV || "development";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/users", userRouter);
const startServer = async () => {
    try {
        await dbConnect(); // will now connect using process.env.MONGO_URI
        const port = process.env.PORT || 5000;
        app.listen(port, () => {
            console.log("Server is running on port");
        });
    }
    catch (error) {
        console.error("Failed to connect to DB or start server:", error);
    }
};
startServer();
//# sourceMappingURL=index.js.map