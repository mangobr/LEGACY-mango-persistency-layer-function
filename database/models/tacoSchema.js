const mongoose = require('mongoose')

const TacoSchema = new mongoose.Schema(
    {
        _id: String,
        id: Number,
        description: String,
        re: {
            qty: String,
            unit: String
        },
        rae: {
            qty: String,
            unit: String
        },
        vitaminC: {
            qty: String,
            unit: String
        },
        baseQty: String,
        baseUnit: String,
        categoryId: Number,
        attributes: {
            humidity: {
                qty: String,
                unit: String
            },
            protein: {
                qty: String,
                unit: String
            },
            lipid: {
                qty: String,
                unit: String
            },
            cholesterol: {
                qty: String,
                unit: String
            },
            carbohydrate: {
                qty: String,
                unit: String
            },
            fiber: {
                qty: String,
                unit: String
            },
            ashes: {
                qty: String,
                unit: String
            },
            calcium: {
                qty: String,
                unit: String
            },
            magnesium: {
                qty: String,
                unit: String
            },
            phosphorus: {
                qty: String,
                unit: String
            },
            iron: {
                qty: String,
                unit: String
            },
            sodium: {
                qty: String,
                unit: String
            },
            potassium: {
                qty: String,
                unit: String
            },
            copper: {
                qty: String,
                unit: String
            },
            zinc: {
                qty: String,
                unit: String
            },
            retinol: {
                qty: String,
                unit: String
            },
            thiamine: {
                qty: String,
                unit: String
            },
            riboflavin: {
                qty: String,
                unit: String
            },
            pyridoxine: {
                qty: String,
                unit: String
            },
            niacin: {
                qty: String,
                unit: String
            },
            energy: {
                kcal: String,
                kj: String
            },
            fattyAcids: {
                saturated: {
                    qty: String,
                    unit: String
                },
                monoUnsaturated: {
                    qty: String,
                    unit: String
                },
                polyUnsaturated: {
                    qty: String,
                    unit: String
                },
                palmiticAcid: {
                    qty: String,
                    unit: String
                },
                stearicAcid: {
                    qty: String,
                    unit: String
                },
                oleicAcid: {
                    qty: String,
                    unit: String
                },
                gadoleicAcid: {
                    qty: String,
                    unit: String
                },
                linoleicAcid: {
                    qty: String,
                    unit: String
                },
                linolenicAcid: {
                    qty: String,
                    unit: String
                }
            },
            manganese: {
                qty: String,
                unit: String
            }
        },
        searchDescription: String
    }
)

module.exports = mongoose.model('TACO', TacoSchema, 'taco-collection')