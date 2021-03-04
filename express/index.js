const express = require("express")

const server = express()


server.get("/", (req, res) => {
    res.render("index")
})

server.use(express.static("/"))

const port = process.env.PORT || 3000

server.listen(port. () => {
    console.log(`Server listening on port ${port}`)
})