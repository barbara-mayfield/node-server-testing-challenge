const db = require("../data/dbConfig")

function getSpells() {
  return db("spells")
}

function findById(id) {
  return db("spells").where({ id }).first()
}

async function insert(newSpell) {
  const [id] = await db("spells").insert(newSpell)
  return findById(id)
}

async function update(id, changes) {
  await db("spells")
    .where({ id })
    .update(changes)

  return findById
}

function remove(id) {
  return db("spells").where({ id }).del()
}

module.exports = {
  getSpells,
  findById,
  insert,
  update,
  remove,
}