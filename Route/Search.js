const router=require('express').Router()

const {Torrent}=require('../Scrapper/Scrapper')
router.get('/:key',async(req,res)=>{
     const data=await Torrent(`search/${req.params.key}/1/`)
     // console.log(data);
     res.send(data)
     
})
module.exports=router;