const express = require ("express");
// Run the app as a function
const app = express();
// Cors enable cross origin requrests
const cors = require('cors');
const productDB = require('./database/database')

app.use(express.json())
app.use(cors())

let port = 5000;

// Testing get requests on /products
app.get('/products',(req,res) => {
    productDB.get(req.params)
})

app.post('/addProduct',(req,res)=>{
    productDB.save(req.data)
})


// lnistenning on port
app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})