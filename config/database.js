const mongoose = require('mongoose')

const bbdd = async () => {
    try {
        await mongoose.connect(process.env.MONGODB);
        console.log("conectado a base de datos de panoramas con MONGO DB");
    } catch (error) {
        console.error(error);
    }
};

module.exports = bbdd;
