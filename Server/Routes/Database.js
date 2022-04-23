const router = require("express").Router();
const db = require("../Firebase");

router.post("/", async (req, res) => {
    const snapshot = await db.collection('database').get()
    res.status(201).json(snapshot.docs.map(doc => doc.data()));
})

module.exports = router;