const router = require("express").Router();
const Link = require("../models/Link");

// GET LINKS
router.get("/:email", async (req, res) => {
  try {
    const links = await Link.find({
      email: req.params.email,
    });

    res.json(links);
  } catch (err) {
    res.status(500).json(err);
  }
});

// ADD LINK
router.post("/", async (req, res) => {
  try {
    const link = await Link.create(req.body);

    res.json(link);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;