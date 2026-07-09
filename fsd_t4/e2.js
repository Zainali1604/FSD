const expr = require('express')
var app = expr()
const mg = require('mongoose')
const { trim } = require('validator')
mg.connect("mongodb://127.0.0.1:27017/mdb2")
const myschema = new mg.Schema(
    {
        email: {
            require: true,
            unique: true,
            type: String,
            match: /\S+@\S+\.\S+/
        },
        gender: String,
        city: { type: String, uppercase: true, trim: true },
        message:String
    }
)

const mymodel = new mg.model('user', myschema)

app.use(expr.static(__dirname, { index: 'e2.html' }))
app.get('/data', async (req, res) => {
    const mydata = new mymodel({
        email: req.query.email,
        gender: req.query.gender,
        city: req.query.city,
        message: req.query.msg

    })
    await mydata.save()
    res.send(`Thank you!`)
})
app.listen(7002)