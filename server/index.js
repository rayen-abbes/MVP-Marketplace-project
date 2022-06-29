const express = require ("express");
const app = express();
const cors = require('cors');

app.use(express.json())
app.use(cors())

let port = 5000;

app.get('/products',(req,res) => {
    res.json({"name":"phone"})
})

app.listen(port,()=>{
    console.log('listening on port '+port)
})