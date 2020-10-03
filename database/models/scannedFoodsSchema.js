const mongoose = require('mongoose')
const TacoSchema = require('./tacoSchema');

const ScannedFoods = new mongoose.Schema({
    clientId: String,
    labeledFoods: [String],
    nutritionfacts: TacoSchema,
    consolidatedFoodId: [
        {
            labeledFoods: String,
            nutritionfacts: TacoSchema
        }
    ],
    recognitionDate: Date,
})

module.exports = mongoose.model('ScannedFoods', ScannedFoods, 'scanned-foods-collection')