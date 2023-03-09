const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const candidatsSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    urlToImage: {
        type: String,
        required: true
    }
});

const Candidats = mongoose.model(`Candidats`, candidatsSchema);

module.exports = Candidats;