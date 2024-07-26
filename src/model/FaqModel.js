const mongoose= require('mongoose');
const Collection = require('../config/Collection');
require('../config/db')

const FaqSchema = new mongoose.Schema({
    title : {type:String,unique:true},
    description : String,
}, {timestamps:true}
)

const FaqModel = mongoose.model(Collection.Faq,FaqSchema);
module.exports = FaqModel;