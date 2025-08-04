const mongoose = require("mongoose");
const Repository = require("../models/repoModel");
// const User = require("../models/userModel");
// const Issue = require("../models/issueModel");

const User = require("../models/userModel");
const Issue = require("../models/issueModel");


/**
 *Create a new repository
 *POST /api/repositories
 *Private (assuming user authentication)
 */
async function  createRepo (req,res){
    const { owner, name, issues, content, description, visibility } = req.body;
  try {
    if (!name) {
      return res.status(400).json({ error: "Repository name is required!" });
    }

    if (!mongoose.Types.ObjectId.isValid(owner)) {
      return res.status(400).json({ error: "Invalid User ID!" });
    }

    const newRepository = new Repository({
      name,
      description,
      visibility,
      owner,
      content,
      issues,
    });
    const result = await newRepository.save();
    res.status(201).json({
      message: "Repository created!",
      repositoryID: result._id,
    });
  } catch (err) {
    console.error("Error during repository creation : ", err.message);
    res.status(500).send("Server error");
  }

};

async function  getAllRepo (req,res){
    res.send("There is all repos");
}

async function  fetchRepoById (req,res){
    res.send("Repo fetched");
    
}

async function  fetchRepoByName (req,res){
    res.send("Repo created");
    
}

async function  fetchRepoFrCurUser (req,res){
    res.send("Repo created");
    
}

async function  updateRepo (req,res){
    res.send("Update your repo");
    
}

async function  togglePof (req,res){
    res.send("Toggle your repo to public or private");
    
}

async function  deleteRepo (req,res){
    res.send("Repo deleted");
    
}

module.exports={
    createRepo,
    getAllRepo,
    fetchRepoById,
    fetchRepoByName,
    fetchRepoFrCurUser,
    updateRepo,
    togglePof,
    deleteRepo,
};