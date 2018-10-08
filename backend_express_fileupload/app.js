var express = require('express')
var app = express()
var cors = require('cors')
var unggah = require('express-fileupload')
app.use(unggah())
app.use(cors())
app.use('/filestorage', express.static('storage'))

app.get('/', (req, res)=>{ 
    res.send('<h1>Welcome!</h1>')
})

app.post('/', (req, res)=>{
    if(req.files){
        console.log(req.files)
        var unggahFile = req.files.file
        var file = unggahFile.name
        unggahFile.mv('./storage/'+file, (err)=>{
            if(err){
                console.log(err)
                res.send(err)
            } else {
                console.log('File sukses diupload!')
                res.send('File sukses diupload!')
                // res.send(file)
            }
        })
    }
})

app.listen(5000, ()=>{
    console.log('Server aktif @port 5000!')
})