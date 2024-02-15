const mongoose = require('mongoose');

const planSchema = new mongoose.Schema({
    titulo : { type: String, require: true},
    descripcion: {type: Number, require: true },
    fecha:{type:String, require:true},
    lugar:{type:String, require:true},
    tipo: String
});

const Plan = mongoose.modelo('panoramas', planSchema);

module.exports = Plan