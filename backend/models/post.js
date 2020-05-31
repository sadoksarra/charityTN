const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Post = new Schema({
   first_name: {
      type: String
   },

   last_name: {
    type: String
    },

    email: {
        type: String
    },

   phone: {
      type: Number
   },

   situation: {
        type: String
    },

   adress: {
      type: String
    },

   need: {
      type: String
   }
  
}, {
   collection: 'Posts'
   })

module.exports = mongoose.model('Post', Post)