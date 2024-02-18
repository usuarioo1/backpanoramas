const mongoose = require('mongoose');

const planSchema = new mongoose.Schema({
    titulo : { type: String, require: true},
    descripcion: {type: String, require: true },
    fecha:{type:String, require:true},
    lugar:{type:String, require:true},
    imagen:{type: String},
    tipo: String,

});

const Plan = mongoose.model('panoramas', planSchema);

module.exports = Plan;