

    const express = require('express')
    const app = express()
    const http = require('http')
    const cors = require('cors')
    const server = http.createServer(app)

    const corsip = {
      origin: 'https://tiagocartorio.github.io/teste/',
      OptionsSucessStatus:200
    }

    app.use(cors(corsip))

    app.get('/', (req, res)=>{
      res.send("Hello word")
    })

    server.listen(3030, '0.0.0.0', ()=>{
      console.log("Deu certo")
    })
