const projectRoutes = require('./routes/projectRoutes')
const contactRoutes = require('./routes/contactRoutes')
const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())


app.get('/', (req, res) => {
    res.send("API is Running")
})

app.use("/api/projects" , projectRoutes)

app.use("/api/contact", contactRoutes )


module.exports = app