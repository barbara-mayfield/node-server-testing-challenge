const supertest = require("supertest")
const server = require("./index")

test("Main Route", async () => {
    const res = await supertest(server).get("/")

    expect(res.status).toBe(200)
    expect(res.type).toBe("application/json")
    expect(res.body.message).toBe("Welcome to the D&D API")
})