const Express = require("express");
const app = Express();
const cors = require("cors");
var bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.json());

app.use("/Search", require("./Route/Search"));
app.use("/Magnet", require("./Route/Magnet"));
app.use("/Trending", require("./Route/Trending"));
app.use("/Top", require("./Route/Top"));
app.use("/Popular", require("./Route/Popular"));

app.listen(process.env.PORT || 8000, () => {
  console.log("Server has started At port 8000");
});

// async function data(){
//      const torrentdata=[]
//      // const $ = await html('https://www.1377x.to/search/gta/1/')
//      // $('table  tbody  tr ').each((i,dd)=>{
//      //      const data={
//      //           link:$(dd).find('td.coll-1.name a:nth-child(2)').attr('href'),
//      //           Name:$(dd).find('td.coll-1.name a:nth-child(2)').text(),
//      //           seed:$(dd).find('td.coll-2.seeds').text(),
//      //           leeches:$(dd).find('td.coll-3.leeches').text(),
//      //           time:$(dd).find('td.coll-date').text(),
//      //           size:$(dd).find('td.coll-4.size.mob-uploader').text(),
//      //           uploadedby:$(dd).find('td.coll-5.uploader a').text(),

//      //      }
//      // torrentdata.push(data)
//      // })
// //      const $ = await html('https://www.1377x.to/torrent/4720841/Grand-Theft-Auto-V-GTA-V-build-2189-1-52-online-DLCs-MULTi13-DODI-Repack/')
// //     const magnetlink=$('a[href^="magnet:?xt=urn:btih:"]').attr('href')
// //     console.log(magnetlink);

// // console.log($('table'));
// }
