const mongoose = require("mongoose")

const projectSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true

        },
        description : {
            type: String,
            required: true

        },
        
        techStack :  {
            type: Array,
            required: true

        },
        liveLink : {
            type : String
        },
        githubLink : {
            type : String

        },
        featured : {
            type : Boolean,
            default : false
        },
        createdAt : {
            type : Date, 
            default: () => Date.now()
        }
    },  {
        timestamps :true
    }
)
module.exports = mongoose.model("Project" , projectSchema)