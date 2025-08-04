const express = require("express");
const userCon = require("../controllers/userCon");

const userRouter = express.Router();

userRouter.get("/allUsers", userCon.getAllUsers);
userRouter.post("/signup", userCon.signUp);
userRouter.post("/login", userCon.logIn);
userRouter.get("/userProfile/:id", userCon.getUserProfile);
userRouter.put("/updateProfile/:id", userCon.updateUserProfile);
userRouter.delete("/deleteProfile/:id", userCon.deleteUserProfile);

module.exports = userRouter;