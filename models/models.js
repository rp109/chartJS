const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let chartModel = new Schema({
    ipAddress: {
        type: String,
        required: true
    },
    location: {
        type: Object,
        required: true
    },
    browserName: {
        type: String,
        required: true

    }
})

module.exports = mongoose.model('Chart', chartModel)