const router = require("express").Router();

router.post("/", async (req, res) => {

    const UserData = req.body.UserData;
    const id = req.body.id;

    // try {
    //     const savedOrder = await Evente.save();
    //     const saveOrder = await Events.save();
    //     eventMember(savedOrder);
    //     res.status(201).json(savedOrder);
    // } catch (err) {
    //     res.status(500).json(err);
    // }
})

module.exports = router;