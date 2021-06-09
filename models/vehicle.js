const mongoose = require('mongoose');

const vehicleSchema = mongoose.Schema({
    code:{
        type:String,
        require:true,
        trim:true
    },
    model:{
        type:String,
        require:true,
        trim:true
    },
    type:{
        type:String,
        require:true,
        trim:true
    },
    name:{
        type:String,
        require:true,
        trim:true
    },
    categories:[{
        type:mongoose.Schema.Types.ObjectId,
        require:false,
        ref:'categories'
    }],
});

const Vehicle = mongoose.model('vehicles',vehicleSchema);
module.exports = Vehicle;