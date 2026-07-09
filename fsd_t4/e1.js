const expr = require('express')
var app = expr()
const mg = require('mongoose')
const { trim } = require('validator')
mg.connect("mongodb://127.0.0.1:27017/mdb2")
const myschema = new mg.Schema(
    {
        username: {type:String , require: true, trim: true},
        password: String
    }
)

const mymodel = new mg.model('user', myschema)

app.use(expr.static(__dirname, { index: 'el.html' }))
app.get('/data', async (req, res) => {
    const mydata = new mymodel({
        username: req.query.uname,
        password:req.query.pass
    })
    await mydata.save()
    res.send(`Thank you!`)
})
app.listen(7002)