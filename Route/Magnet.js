const router=require('express').Router()

const {magnet}=require('../Scrapper/Scrapper')
router.get('/link',async(req,res)=>{
     const link=req.query.link
     const data=await magnet(link)
     // console.log(data);
     res.send({
          Magnetlink:data
     })
     
})
module.exports=router;