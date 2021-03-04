const express = require("express")
const nunjucks = require("nunjucks")

const server = express()

server.set("views", "./views")

nunjucks.configure("views", {
  autoescape: true,
  express: server,
})

server.get("/", (req, res) => {
  res.render("index.html")
})

server.use(express.static("public"))

const port = process.env.PORT || 3000

server.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
