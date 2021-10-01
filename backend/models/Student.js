const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let StudentSchema = Schema({
    name: {
      type: String
    },
    rollno: {
      type: Number
    }
  }, {
      collection: 'students'
    })
    module.exports = mongoose.model('Student',StudentSchema);