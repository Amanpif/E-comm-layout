const express = require("express")
const cors = require("cors");

const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/e-comm");

const userschema = new mongoose.Schema({
    name: String,
    email: String,
    password: String

})
const user = mongoose.model.users || mongoose.model
("users", userschema);

const productSchema=new mongoose.Schema({
    name:String,
    price:Number,
    userid:Number
})

const product=mongoose.model.products || mongoose.model
("products",productSchema);


const app = express();
// const user=require('./db/users');
app.use(express.json());
app.use(cors());




app.post("/register", async (req, res) => {
    let User = new user(req.body)
    let result = await User.save()
    result=result.toObject();
    delete result.password
    res.send(req.body)
    console.log(result)
})

app.post("/login", async (req, res) => {
    // console.log(req.body);
    
    if (req.body.password && req.body.email) {
        let data = await user.findOne(req.body).select('-password').select('-email')
        if (data) {
            res.send(data)

        }
        else {
            res.send({ result: "no user found" })
        }
    }
    else {
        res.send({ result: "no result found" })
    }

})


app.post("/add-products", async (req,res)=>{
    let Product =new product(req.body);
    let result=await Product.save();
    res.send(result);
})

app.get("/products",async (req,res)=>{
    let Product=await product.find();
    if(Product.length>0){
        res.send(Product)
    }
    else{
        res.send({result:"no products found"})
    }
})

app.delete("/product/:id", async (req,res)=>{
    const result=await product.deleteOne({_id:req.params.id})
    
})

app.get("/product/:id",async (req,res)=>{
    let result=await product.findOne({_id:req.params.id});
    if(result){
        res.send(result)
    }
    else{
        res.send({result:"no data found"})
    }
})


app.put("/product/:id", async (req,res)=>{
    let result=await product.updateOne({_id:req.params.id},{$set:req.body})
    res.send(result)
})

app.get("/search/:key", async (req,res)=>{
    let result=await product.find({
        "$or":[
            {name:{$regex:req.params.key}}
            // {price:{$regex:req.params.key}}
        ]
    })
    res.send(result)
} )

app.get("/info/:_id" ,async  (req,res)=>{
    let result=await user.find({
        _id: req.params._id}
    );
    res.send(result);
});


app.listen(450);