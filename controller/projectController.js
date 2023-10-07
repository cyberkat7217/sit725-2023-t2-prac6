let projectModel = require ("../models/project")

const  createProjects = (req, res) => {
    console.log("New Project added", req.body)
    var newProject = req.body;
    projectModel.insertProjects(newProject, (err, result) => {
        if(err) {
            res.json({statusCode:400,message:'err'})
        }
        else {
            res.json({statusCode:200,data:result,message:"success"})
        }
    })
}

//retrieve project...
const retrieveProjects = (req, res) => {
    projectModel.getProjects((err, result) => {
        if(err) {
            res.json({statusCode:400,message:'err'})
        }
        else {
            res.json({statusCode:200,data:result,message:"success"})
        }
    })
}

module.exports = {retrieveProjects, createProjects};