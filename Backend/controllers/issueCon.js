const createIssue =(req,res)=>{
    res.send("create a issue");
}
const updateIssueById= (req,res)=>{
    res.send("Issue update by id");
}
const deleteIssueById= (req,res)=>{
    res.send("delet issue by id");
}
const getAllIssue= (req,res)=>{
    res.send("get all Issue");
}

const getIssueById= (req,res)=>{
    res.send("Issue get by id");
}

module.exports={
    createIssue,
    updateIssueById,
    deleteIssueById,
    getAllIssue,
    getIssueById
};
