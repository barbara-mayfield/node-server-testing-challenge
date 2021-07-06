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

    test("findById", async () => {
        const res = await spellsModel.findById(1)
        expect(res.name).toBe("fireball")
    })

    test("insert", async () => {
        await spellsModel.insert({ name: "rejuvenation" })
        const spells = await db("spells").select()
        expect(spells).toHaveLength(5)
    })

    test("update", async () => {
        await spellsModel.update(1, { name: "fire blast" })
        const spell = await spellsModel.findById(1)
        expect(spell.name).toBe("fire blast")
    })

    test("remove", async () => {
        await spellsModel.remove(1)
        const spells = await spellsModel.getSpells()
        expect(spells).toHaveLength(3)
    })
})