const mg = require("mongoose");
const validator=require('validator')
mg.connect("mongodb://127.0.0.1:27017/mdb2")
    .then(() => { console.log('success') })
    .catch((e) => { console.log(e) })

const myschema = ({
    name:{
        type: String,
        maxlength: [8, "Max length should be 8"],
        minlength: 4, require: true,
        uppercase: true, trim: true,
        match:[/^[A-Za-z]+[0-9]+$/,"MUST START WITH LETTER END WITH DIGIT"]
    },
    email:{
        require: true,
        unique: true,
        type: String,
        match:/\S+@\S+\.\S+/
    },
    aemail:{
        type:String,
        validator:[validator.isEmail,'Not valid']
    },
    age:{
        type:Number,
        max: 48,
        min: 18
    },
    role:{
        type:String,
        enum: ['buyer', 'seller'],
        default:'buyer'
    },
    product:{
        type: String,
        validator:[validator.isAlphanumeric,'Not valid alphanumeric code!']
    }
})

const mymodel = new mg.model("products", myschema)
const validfun = async () => {
    try {
        const data = new mymodel({
            name: 'XYZ123',
            email: 'xyz@gmail.com',
            aemail: 'x@gmail.com',
            age: 25,
            role: "seller",
            product:"myproduct1"
        })
        const result = await data.save();
        console.log(result)
    }
    catch (e) {
        console.log(e)
    }
}
validfun()