const router=require('express').Router()

const {Torrent}=require('../Scrapper/Scrapper')
router.get('/all/day',async(req,res)=>{
     const data=await Torrent(`trending`)
     // console.log(data);
     res.send(data)
     
})
router.get('/all/week',async(req,res)=>{
     const data=await Torrent(`trending-week`)
     // console.log(data);
     res.send(data)
     
})
router.get('/:key/day',async(req,res)=>{
     const data=await Torrent(`trending/d/${req.params.key}/`)
     // console.log(data);
     res.send(data)
     
})
router.get('/:key/week',async(req,res)=>{
     const data=await Torrent(`trending/w/${req.params.key}/`)
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