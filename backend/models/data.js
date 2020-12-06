const mongoose = require('mongoose');
const sinedup_data = new mongoose.Schema({
  name: String,
  email:String,
  number: String,
  password:String

});
sinedup_data.set('toJSON', {
  transform: (doc, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});
module.exports = mongoose.model('Data', sinedup_data);