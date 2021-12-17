const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    name: String,
    email: String
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;