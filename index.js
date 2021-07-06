const express = require("express")
const helmet = require("helmet")
const spellsRouter = require("./spells/spells-router")

const server = express()
const port = process.env.PORT || 8000

server.use(helmet())
server.use(express.json())
server.use("/spells", spellsRouter)

server.get("/", (req, res) => {
    res.status(200).json({
        message: "Welcome to the D&D API"
    })
})

server.use((err, req, res, next) => {
    console.log("Error:", err)
    res.status(500).json({
        message: "Oops go check your code...",
    })
})

if(!module.parent) {
    server.listen(port, () => {
        console.log(`\nServer up at [http://localhost:${port}]\n`)
    })
}

module.exports = server;