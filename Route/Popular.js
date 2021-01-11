const router=require('express').Router()

const {Torrent}=require('../Scrapper/Scrapper')
router.get('/:popkey/day',async(req,res)=>{
     const data=await Torrent(`popular-${req.params.popkey}`)
     // console.log(data);
     res.send(data)
     
})
router.get('/:popkey/week',async(req,res)=>{
     const data=await Torrent(`popular-${req.params.popkey}-week`)
     // console.log(data);
     res.send(data)
     
})
module.exports=router;

// keyWords
// movies
// tv
// games
// music
// apps
// anime
// other