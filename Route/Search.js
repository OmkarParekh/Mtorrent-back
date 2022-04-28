const router = require("express").Router();

const { Torrent } = require("../Scrapper/Scrapper");
router.get("/:key", async (req, res) => {
  try {
    const data = await Torrent(`search/${req.params.key}/1/`);
    //     console.log(data);
    res.send(data);
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;
