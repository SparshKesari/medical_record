const router = require('express').Router()
const User = require('../Models/User')

router.post('/signup', async (req,res) => {
    try{
        console.log(req.body)
        var name = req.body.name;
        var email = req.body.email;
        var number = req.body.number
        const user = new User({
            name: name,
            email: email,
            phoneNumber: number
        })
        console.log(user)
        try{
            await user.save()
        }catch(err){
            console.log(err.message)
        }
    }
    catch(err){
        console.log(err.message)
    }
})
router.post('/addform', async(req,res) => {
    try{
        console.log(req.body)
        var email = req.body.email
        const user = await User.findOne({email : email});
        const request = new Object()
        request.doctorName = req.body.doctorName
        request.disease = req.body.diseaseName
        request.date = req.body.date
        request.doctype = req.body.doctype
        request.description = req.body.description
        request.Medicines = req.body.medicines
        console.log(request)
        user.medicalRecords.records.push(request)
        try{
            await user.save()
            console.log('data pushed')
            res.json({request, data: 'Success'});
        }catch(err) {
            console.log(err.message)
        }
    }
    catch(err){
        console.log(err.message)
    }
})

router.post('/search', (req, res) => {
    const email = req.body.email;
    console.log(email);
    if(!email) {
        return res.json({error: "email undefined"});
    }
    User.find({email})
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            console.log(err);
        });
});
module.exports = router