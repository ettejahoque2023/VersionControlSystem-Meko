const express = require("express");
const repoCon = require("../controllers/repoCon");

const repoRouter = express.Router();

repoRouter.post("/repo/create", repoCon.createRepo);
repoRouter.get("/repo/all", repoCon.getAllRepo);
repoRouter.get("/repo/:id", repoCon.fetchRepoById);
repoRouter.get("/repo/name/:name", repoCon.fetchRepoByName);
repoRouter.get("/repo/user/:userID", repoCon.fetchRepoFrCurUser);
repoRouter.put("/repo/update/:id", repoCon.updateRepo);
repoRouter.delete("/repo/delete/:id", repoCon.togglePof);
repoRouter.patch("/repo/toggle/:id", repoCon.deleteRepo);

module.exports = repoRouter;