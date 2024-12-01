const mongoose=require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/e-comm");
const productSchema=new mongoose.Schema({
    name:String,
    price:Number
})

const product=mongoose.model("products",productSchema);
