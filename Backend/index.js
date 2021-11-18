import express from "express"
import cors from "cors"
import mongoose from "mongoose"

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/myLoginRegisterDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    cart: [],
})

const productSchema = new mongoose.Schema({
    imageUrl: String,
    name: String,
    price: String,
})

const User = new mongoose.model("User", userSchema)
const Product = new mongoose.model("Product", productSchema)

//Routes

app.post("/getUserCart",(req, res) => {
    const id = req.body;
    const userID = Object.keys(id)[0];
    User.findOne({_id: userID}, (err, user) => {

        if(user) {
            res.send(user.cart);
                      
        } else {
            res.send({err})
        }
    });
});

app.get("/productInfo",(req, res)=>{
    Product.find({},(err,data)=>{
        if(!err){
            res.send(data);
        }
        else{
            console.log(err);
        }
    });

});

// working omn deleting the item from cart
app.delete("/deleteCartItem", (req, res) => {
    // const [productId, userId] = req.body;
    // console.log(userId);
    // console.log(productId); 
    // "cart":  {_id: productId} }
    User.findOneAndDelete({_id: req.body },(err, doc)=>{
        console.log(doc);
    })
//   User.find() 
})

app.post("/addToCart",(req, res)=>{
    const [productInfo, userID] = req.body;

    User.findOneAndUpdate({_id: userID},{$push : {"cart": {
        _id: productInfo._id,
        imgUrl: productInfo.imgUrl,
        name: productInfo.name,
        price: productInfo.price
    }}}, null, (err,data)=>{
        if(err){
            res.send({message : "Error fetching data"});
        }
        else{
            res.send({message : "Data Fetched"});
        }
    })

});

app.post("/login", (req, res)=> {
    const { username, password} = req.body;
    User.findOne({ email: username}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({message: "Login Successfull", user: user})
            } else {
                res.send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    })
});

app.post("/register", (req, res)=> {
    const { name, email, password} = req.body
    User.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {
            const user = new User({
                name,
                email,
                password,
                cart:[]
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully Registered, Please login now." })
                }
            })
        }
    })
    
});



app.listen(9002,() => {
    console.log("BE started at port 9002")
});