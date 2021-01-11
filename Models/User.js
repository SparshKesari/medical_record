const mongoose = require('mongoose')
const Schema  = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: String,
    phoneNumber: String,
    medicalRecords : {
        records: [{
            doctorName: String,
            disease: String,
            date: String,
            doctype: String,    
            description: String,
            Medicines : [{
            }]
        }]
    }
})

const User = mongoose.model('user', userSchema)

module.exports = User;