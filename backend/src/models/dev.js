const { Schema, model } = require("mongoose");

// Aqui cria um schema para o database
const DevSchema = new Schema({
    name: String, 
    user: {
        type: String,
        required: true,
    },
    bio: String,
    avatar: {
        type: String,
        required:  true,
    }, 
}, {
    timestamps: true,
});

// Esporta o schema
module.exports = model('Dev', DevSchema);
