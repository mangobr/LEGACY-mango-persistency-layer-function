const mongoose = require("mongoose")
const mangoDBConnectionString = 'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false'
const ScannedFoods = require("../database/models/scannedFoodsSchema")
const TACO = require("../database/models/tacoSchema")
const { findTacoFoodDescriptionByName } = require("../mongoTransactions")
const exportedTacoCollection = require("../tests/__mocks__/mockkMangoDB.json")

mongoose.connect(mangoDBConnectionString)

  describe('Should test mongoDB TACO Collection transactions', ()=>{
    beforeAll(async () =>{
        TACO.remove({})
    })

    afterEach(async()=>{
        TACO.remove({})
    })

    test('should return TACO schema', () => {
        expect(TACO).toBeDefined()
    })

    test('should return a list of foods which has been filtered by a regex', async () => {
        const tacoCollection = new TACO(exportedTacoCollection[0])
        await tacoCollection.save()
        const eggResultsFilteredByName = await findTacoFoodDescriptionByName("Egg")
        expect(eggResultsFilteredByName).toEqual(exportedTacoCollection)
    })
    
    
  })




  describe('Should test mongoDB ScannedFood Collection transactions', ()=>{
    beforeAll(async () =>{
        ScannedFoods.remove({})
    })

    afterEach(async()=>{
        ScannedFoods.remove({})
    })

    test('should return TACO schema', () => {
        expect(ScannedFoods).toBeDefined()
    })
  })
