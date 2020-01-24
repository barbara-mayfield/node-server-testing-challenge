const knex = require("knex")
const dbConfig = require("../knexfile")

const environment = process.env.NODE_ENV || "dev"

module.exports = knex(dbConfig[environment])
