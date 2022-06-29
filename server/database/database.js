const mongoose = require('mongoose')

let CONNECTION_URL = "";

mongoose.connect(CONNECTION_URL)

const productSchema = mongoose.Schema({
    id:String,
    productName:{
        type:String,
        requred:true
    },
    phoneNumber:String,
    details:String,
    price:String,
    picture:String
})

let product = mongoose.model('product', productSchema)

// Function to save data to the database
let save = (data) =>{
    let p = new product({
        id:data.id,
        productName:data.productName,
        phoneNumber:data.phoneNumber,
        details:data.details,
        price:data.price,
        picture:data.picUrl
    })
    let query = p.save((error)=>{
        if (error){
            console.error(error);
        }
    })
    return query;
}