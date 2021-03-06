const mongoose = require('mongoose')

let CONNECTION_URL = "mongodb://localhost:27017";

mongoose.connect(CONNECTION_URL)

const productSchema = new mongoose.Schema({
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

let productDB = mongoose.model('products', productSchema)

let getAll =()=>{
    return productDB.find({})
}

// Function to save data to the database
let save = (data) =>{
    let p = new productDB({
        id:data.id,
        productName:data.productName,
        phoneNumber:data.phoneNumber,
        details:data.details,
        price:data.price,
        picture:data.picture
    })
    p.save((error)=>{
        if (error){
            console.error(error);
        }
    })
    return getAll();
}

let del =(data)=>{
    productDB.deleteOne({id:data})
    .catch(err =>{
        console.log(err)
    })
    return getAll()
    
}

let update =(data)=>{
    productDB.findByIdAndUpdate(data.id,data)
    .catch(err =>{
        console.log(err)
    })
    return getAll()
}


module.exports.getAll = getAll;
module.exports.save = save;
module.exports.del = del;
module.exports.update = update;