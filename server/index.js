// Communt Imports
const express = require ("express");
// Run the app as a function
const app = express();
// Cors enable cross origin requrests
const cors = require('cors');
// Database
const productDB = require('./database/database')



app.use(express.json())
app.use(cors())

let port = 5000;

// Returns all products from database to be displayed
app.get('/',(req,res) => {
    productDB.getAll().then((data)=>{
        res.send(data)
    })
})

// Adding a product
app.post('/addProduct',(req,res)=>{
    console.log(req)
    productDB.save(req.body)
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        console.log(err)
    })
})

app.put('/updateProduct',(req,res)=>{
    let data = {
        id:req.params.id,
        productName:req.body.productName,
        phoneNumber:req.body.phoneNumber,
        details:req.body.details,
        price:req.body.price,
        picture:req.body.picture
    }
    mongoo.update(data).then(response =>{
        res.send(response)
    })
 
})

app.delete('/delete',(req,res)=>{
    productDB.del(req.params.id)
    .then(data => {res.send(data)})
})


// lnistenning on port
app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})