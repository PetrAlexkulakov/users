const express = require('express')
const router = express.Router()
const { Users } = require('../models')

router.get('/', async (req, res) => {
    const listOfPosts = await Users.findAll()
    res.json(listOfPosts)
})
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    
    const user = await Users.findByPk(id);

    res.json(user);
})

router.post("/", async (req, res) => {
    const user = req.body
    await Users.create(user);

    res.json(user)
})

router.put("/:id", async (req, res) => {
    const userId = req.params.id;
    const updatedData = req.body;

    const user = await Users.findByPk(userId);
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }
    await user.update(updatedData);

    res.json(user)
})

router.delete("/:id", async (req, res) => {
    const userId = req.params.id;

    const user = await Users.findByPk(userId);
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }

    await user.destroy();

    res.json({ message: 'User deleted successfully' });
});

module.exports = router