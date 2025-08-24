import express from "express";
import { createUser } from "../controllers/user.controller.js";
import validateUser from "../middlewares/user.middleware.js";
const userRouter = express.Router();
userRouter.post("/register", validateUser, createUser);
export default userRouter;
//# sourceMappingURL=user.routes.js.map