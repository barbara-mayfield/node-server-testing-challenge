const spellsModel = require("./spells-model.js")
const db = require("../data/dbConfig")

beforeEach(async () => {
    await db.seed.run()
})

describe("spells model", () => {
    test("getSpells", async () => {
        const res = await spellsModel.getSpells()
        expect(res).toHaveLength(4)
    })
})