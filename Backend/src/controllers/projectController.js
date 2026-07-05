const Project = require('../models/Project')

exports.getProjects = async (req,res) => {
    try{
        const allProject = await Project.find().sort({createdAt : -1})
        res.status(200).json({success : true , projects : allProject})
    }
    catch(error){
        res.status(500).json({success : false , message : error.message})
    }
}

exports.createProject = async (req,res) => {
try{
   const {title, description, techStack, liveLink, githubLink, featured} = req.body
   const data = {title, description, techStack, liveLink, githubLink, featured} 
    const newProject = await Project.create(data)
    res.status(201).json({success: true , project : newProject})

}   catch(error){
    res.status(500).json({success : false , message : error.message})
}
}