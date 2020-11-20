const mongoose = require("mongoose")
const mangoDBConnectionString = 'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false'
const ScannedFoods = require("../database/models/scannedFoodsSchema")
const TACO = require("../database/models/tacoSchema")
const { findTacoFoodDescriptionByName, insertValidatedFoodAssignment } = require("../mongoTransactions")
const {returnConsolidatedFoodScan, returnTacoFood} = require('./__mocks__/mockks')

mongoose.connect(mangoDBConnectionString)

  describe('Should test mongoDB TACO Collection transactions', ()=>{
    beforeAll(async () =>{
        await TACO.remove({})
    })

    afterEach(async()=>{
        await TACO.remove({})
    })

    test('should validate TACO schema', () => {
        expect(TACO).toBeDefined()
    })

    test('should return a list of foods which has been filtered by a regex', async () => {
        const tacoCollection = new TACO(returnTacoFood()[0])
        await tacoCollection.save()
        const eggResultsFilteredByName = await findTacoFoodDescriptionByName("Egg")
        expect(eggResultsFilteredByName).toEqual(returnTacoFood())
    })
  })

  describe('Should test mongoDB ScannedFood Collection transactions', ()=>{
    beforeAll(async () =>{
        await ScannedFoods.remove({})
    })

    afterEach(async()=>{
        await ScannedFoods.remove({})
    })

    test('should validate ScannedFoods schema', () => {
        expect(ScannedFoods).toBeDefined()
    })

    test('should insert a consolidated food scan in MongoDB', async () => {
        const insertedConsolidatedFoodScan = await insertValidatedFoodAssignment(returnConsolidatedFoodScan())
        expect(insertedConsolidatedFoodScan).toEqual('Scan consolidado populado no MangoDB')
        
    })
  })