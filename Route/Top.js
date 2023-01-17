const router = require('express').Router()

const { Torrent } = require('../Scrapper/Scrapper')
router.get('/all', async (req, res) => {
     const data = await Torrent(`top-100`)
     // console.log(data);
     res.send(data)

})
router.get('/:top', async (req, res) => {
     const data = await Torrent(`top-100-${req.params.top}`)
     // console.log(data);
     res.send(data)

})

module.exports = router;


// keyword
// other
// anime
// music
// applications
// television
// games
// movies