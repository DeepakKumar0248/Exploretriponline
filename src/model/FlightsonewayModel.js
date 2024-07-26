const mongoose= require('mongoose');
const Collection = require('../config/Collection');
require('../config/db')

const FlightsonewaySchema = new mongoose.Schema({
    title : {type:String,unique:true},
    description : String,
}, {timestamps:true}
)

const FlightsonewayModel = mongoose.model(Collection.Flightsoneway,FlightsonewaySchema);
module.exports = FlightsonewayModel;