const supertest = require("supertest")
const server = require("./index")
const db = require("./data/dbConfig")

beforeEach(async () => {
    await db.seed.run()
})

test("Main Route", async () => {
    const res = await supertest(server).get("/")

    expect(res.status).toBe(200)
    expect(res.type).toBe("application/json")
    expect(res.body.message).toBe("Welcome to the D&D API")
})

test("get spells", async () => {
    const res = await supertest(server).get("/spells")

    expect(res.status).toBe(200)
    expect(res.type).toBe("application/json")
    expect(res.body.length).toBeGreaterThan(0)
    expect(res.body[0].id).toBe(1)
    expect(res.body[0].name).toBe("fireball")
})

test("new spell route", async () => {
    const res = await supertest(server)
        .post("/spells")
        .send({ name: "Arcane Eye" })
    expect(res.status).toBe(201)
    expect(res.type).toBe("application/json")
    expect(res.body).toEqual({ id: 5, name: "Arcane Eye"})
})

test("update spell", async () => {
    const res = await supertest(server)
        .put("spells/1")
        .send({ name: "Burning Hands" })
    expect(res.status).toBe(200)
    expect(res.type).toBe("application/json")
    expect(res.body.name).toBe({ name: "Burning Hands" })
})

test("delete /spells/:id", async () => {
    const res = await supertest(server).delete("/spells/1")
    expect(res.status).toBe(200)
    expect(res.type).toBe("")
    expect(res.body).toStrictEqual({})
})