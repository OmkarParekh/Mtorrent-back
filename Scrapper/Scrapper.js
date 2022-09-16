const Axios = require("axios");
const cheerio = require("cheerio");
async function html(link) {
  const res = await Axios.get(link, {
    // Proxy example for the Axios Users
    proxy: {
      host: `144.168.217.89`,
      port: 8781,
      auth: {
        username: "xsdmhtgj",
        password: "1bnfxj8vryno",
      },
    },
  });
  // const res= await Axios.get(link,{
  //      // Proxy example for the Axios Users
  //      proxy: {
  //           host: `209.127.191.180`,
  //           port: 9279,
  //           auth: {
  //             username: 'xsdmhtgj-dest',
  //             password: '1bnfxj8vryno'
  //           }

  //      }

  // })
  // console.log(res.data)
  return cheerio.load(res.data);
}
async function Torrent(Route) {
  const torrentdata = [];
  // console.log(Route);
  const $ = await html(`https://www.1377x.to/${Route}`);
  // console.log();
  $("table  tbody  tr ").each((i, dd) => {
    const data = {
      link: $(dd).find("td.coll-1.name a:nth-child(2)").attr("href"),
      Name: $(dd).find("td.coll-1.name a:nth-child(2)").text(),
      seed: $(dd).find("td.coll-2.seeds").text(),
      leeches: $(dd).find("td.coll-3.leeches").text(),
      time: $(dd).find("td.coll-date").text(),
      size: $(dd).find("td.coll-4.size.mob-uploader").text(),
      uploadedby: $(dd).find("td.coll-5.uploader a").text(),
    };
    torrentdata.push(data);
  });
  return torrentdata;

  // console.log($('table'));
}

async function magnet(Route) {
  const $ = await html(`https://www.1377x.to/${Route}`);
  const magnetlink = $('a[href^="magnet:?xt=urn:btih:"]').attr("href");
  // console.log(magnetlink);
  return magnetlink;

  // console.log($('table'));
}

module.exports = {
  Torrent,
  magnet,
};
