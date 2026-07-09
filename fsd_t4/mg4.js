const mg = require("mongoose");
const validator=require('validator')
mg.connect("mongodb://127.0.0.1:27017/mdb2")
    .then(() => { console.log('success') })
    .catch((e) => { console.log(e) })

const myschema = new mg.Schema({
    course: String,
    category: String,
    instructor: String,
    fees: Number,
    duration: Number,
    active: Boolean,
    mode:{type:String,enum:['online','offline']}
})

const mymodel = new mg.model('courses', myschema)
const myfun = async () => {
    try {
        const data = [{
            course: 'MERN',
            category: 'WD',
            instructor: 'ABC',
            fees: 25000,
            duration: 4,
            active: true,
            mode: 'offline'
        },
        {
            course: 'python',
            category: 'programming',
            instructor: 'XYZ',
            fees: 18000,
            duration: 3,
            active: false,
            mode: 'online'
        },
        {
            course: 'ML',
            category: 'A1',
            instructor: 'MNO',
            fees: 30000,
            duration: 6,
            active: true,
            mode: 'offline'
        },
        {
            course: 'Data science',
            category: 'Data analytics',
            instructor: 'DEF',
            fees: 28000,
            duration: 6,
            active: true,
            mode: 'online'
        },
        {
            course: 'UX/UI',
            category: 'Design',
            instructor: 'PQR',
            fees: 12000,
            duration: 2,
            active: false,
            mode: 'offline'
        }
        ]
    

        // const result = await mymodel.insertMany(data)
        //  console.log(result)
         const res1 = await mymodel.findOne({ active:true })
         console.log(res1._id);
        const res2 = await mymodel.findByIdAndUpdate(res1._id, { $set: { fees: 37000, duration: 5 } })
         console.log(res2)
        // const res3 = await mymodel.findByIdAndDelete(res1._id)
        // if (res3) {
        //     console.log("delete",res3)
        // }
        // else {
        //     console.log("no document found")
        // }

        const myresult = []
        myresult.push(await mymodel.find(
            {}, { course: 1, duration: 1, fees: 1, _id: 0 }).sort({fees:-1}).limit(1).skip(1)
        )
        //console.log(myresult)

        myresult.push(await mymodel.find({
            mode:'online',fees:{$gt:25000}
        }))
        myresult.push(await mymodel.updateOne({
             course:'Cloud computing'},{$set:{fees:32000,duration:5,active:true}},{upsert:true}))
        
        myresult.push(await mymodel.countDocuments({ active: true, mode: 'offline' }))
        
        myresult.push(await mymodel.updateMany({}, { $inc: { duration: -1 } }))
        
        myresult.push(await mymodel.find({$and:[{active:true},{duration:{$gte:4}}],$nor:[{mode:'offline'}]}))
       
       myresult.push(await mymodel.updateMany({},{$mul:{fees:0.9}}))
        console.log(myresult)
    }
    

    catch (e) {
        console.log(e)
        }
}
myfun();

