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
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev'
    }],
    dislikes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev'
    }],
}, {
    timestamps: true,
});

// Esporta o schema
module.exports = model('Dev', DevSchema);
