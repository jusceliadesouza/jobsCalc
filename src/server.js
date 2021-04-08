const express = require("express")
const server = express()
const routes = require("./routes")

//template engine
server.set('view engine', 'ejs')

//arquivos estáticos
server.use(express.static("public"))

//req.body
server.use(express.urlencoded({ extended: true }))

//routes
server.use(routes)

server.listen(3000, () => console.log('running'))