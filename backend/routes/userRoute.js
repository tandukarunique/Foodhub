import express from "express";
import { loginUser, registerUser } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
export default userRouter;

// import express from "express";

// const router = express.Router();

// router.get("/", (req, res) => {
//   res.send("User API Working");
// });

// export default router;
