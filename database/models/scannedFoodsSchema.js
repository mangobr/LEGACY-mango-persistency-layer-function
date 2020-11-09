const mongoose = require('mongoose')
const TacoSchema = require('./tacoSchema');

const ScannedFoods = new mongoose.Schema({
    userId: String,
    consolidatedScannedFood: [Object],
    createDate: String,
    updateDate: Date,
    s3URL: String
})

module.exports = mongoose.model('ScannedFoods', ScannedFoods, 'scanned-foods-collection')