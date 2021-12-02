// const express = require('express');
// const app = express();
// const cheerio = require('cheerio')
// const axios = require('axios')
// // import fetch from 'node-fetch';
// var apiResponse=null;
// const meta = {
//     "user-agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36",
//     method: 'get',
//     url: 'https://www.imdb.com/',
//     // responseType: 'stream'
// }
// const getDataFromWebsite = async()=>{

//      const {data} = await axios(meta)
//         const body = data
//         const $ = cheerio.load(body)
        
        
//         const arr =$('.ipc-sub-grid:nth-child(2)').children().map((l,i)=>{
//             return {name:$(i).find('.ipc-poster-card__title').text()}
//         }).toArray()
//         const apiR ={movies:{  arr }}
//         apiR.movies.arr.map((l,i)=>{
//             console.log(`${l.name} is at ${i}`)
//         })
// }
// var port = 3003;
// app.listen(port,(req,res)=>{
// getDataFromWebsite()
    
// })
// // const express = require('express');
// // const app = express();
// // const cheerio = require('cheerio')
// // const axios = require('axios')
// // // import fetch from 'node-fetch';
// // var apiResponse=null;
// // const meta = {
// //     "user-agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36",
// //     method: 'get',
// //     url: 'https://www.rottentomatoes.com/browse/opening',
// //     // responseType: 'stream'
// // }
// // const getDataFromWebsite = async()=>{

// //      const {data} = await axios(meta)
// //         const body = data
// //         const $ = cheerio.load(body)
        
// //         const arr =$('.media-list').children().map((l,i)=>{
// //             return {name:$(i).find('.media-list__title').text()}
// //         }).toArray()
// //         const apiR ={movies:{  arr }}
// //         apiR.movies.arr.map((l,i)=>{
// //             console.log(`${l.name} is at ${i}`)
// //         })
// // }
// // var port = 3003;
// // app.listen(port,(req,res)=>{
// // getDataFromWebsite()
    
// // })


//trying url shortner


var urls =require('node-url-shortener')
urls.short('https://google.com',(err,url)=>{

console.log(url)
})