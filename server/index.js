const express = require ("express");
// Run the app as a function
const app = express();
// Cors enable cross origin requrests
const cors = require('cors');


app.use(express.json())
app.use(cors())

let port = 5000;

// Testing get requests on /products
app.get('/products',(req,res) => {
    res.json({"name":"phone"})
})

// listenning on port
app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})