const express = require("express")
const spellsModel = require("./spells-model")
const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        const spells = await spellsModel.getSpells()
        res.json(spells)
    } catch(err) {
        next(err)
    }
});

router.post('/', async (req, res, next) => {
    try {
        const spell = await spellsModel.insert(req.body)
        res.status(201).json(spell)
    } catch(err) {
        next(err)
    }
})

router.get("/:id", async (req, res, next) => {
    try {
        const { id } = req.params
        const spell = await spellsModel.getSpells(id)
        res.json(spell)
    } catch(err) {
        next(err)
    }
})

router.put("/:id", async (req, res, next) => {
    try {
      const { id } = req.params
      const updateSpell = await spellsModel.update(id)
      res.status(200).json(updateSpell)
    } catch(err) {
      next(err)
    }
})

router.delete("/:id", async (req, res, next) => {
    try {
        const { id } = req.params
        await spellsModel.remove(id)
        res.status(200).end()
    } catch (err) {
        next(err)
    }
})

module.exports = router;