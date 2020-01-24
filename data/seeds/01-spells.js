exports.seed = async (knex) => {
  await knex("spells").insert([
    { name: "fireball" },
    { name: "mage hands" },
    { name: "faerie fire" },
    { name: "circle of protection" },
  ])
}
