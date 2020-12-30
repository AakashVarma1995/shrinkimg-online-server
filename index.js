const express = require('express')
const bodyParser = require("body-parser");
const crypto = require('crypto')
const Jimp = require('jimp');
const app = express()
const host='https://api.shrinkimg.online'
const path = require('path')

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();

});

app.use(bodyParser.json({limit: '16mb', extended: true }));
app.use (function (error, req, res, next){
  if(error.toString()=="PayloadTooLargeError: request entity too large"){
    res.send({error:"Max file size supported is 2MB!"})
  }
  else{
    console.error(error)
  }
});

const port = 5000

app.use( express.static('./static'))

app.use('/images', express.static('./compressed_images'))


app.post('/compress', (req,res)=>{
    const outputPath = './compressed_images/'
    if(!req.body.image){
        res.send({error:"Please select an image first!"})
    }
    let file = req.body.image.split(',')[1]
    let buf = new Buffer.from(file, 'base64');
    let opFile = crypto.randomBytes(8).toString('hex')+'.jpg'
    Jimp.read(buf)
      .then(image => {
        image.resize(req.body.height.toString().toLowerCase()=='auto'?Jimp.AUTO:parseInt(req.body.height), req.body.width.toString().toLowerCase()=='auto'?Jimp.AUTO:parseInt(req.body.width))
          .quality(parseInt(req.body.quality))
          .write( outputPath+ opFile)
      })
      .then(()=>{
        res.send({url:host+'/images/'+opFile, file_name:opFile})
      })
      .catch(err => {
        console.log(err.toString())
        if(err.toString()=="Error: w and h cannot both be set to auto"){
            res.send({error:"Please provide either height or width..."})
        }
        else if(err.toString()=="Error: Could not find MIME for Buffer <null>"){
            res.send({error:"This file type is not supported!"})

        }
        else{
            res.send({error:"There was some error!"})

        }
      })
})



app.listen(port, () => {
  console.log(`API Server is listening at http://localhost:${port}`)
})