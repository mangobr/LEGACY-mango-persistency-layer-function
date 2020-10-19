'use strict';
const MangooDBConnect = require('./database/mangoodbConnect')
const TACO = require('./database/models/tacoSchema')
const ScannedFoods = require('./database/models/scannedFoodsSchema')

MangooDBConnect();


  const hello = async event => {
    let assignedFoods = []
    const objectKeys = event.requestPayload.Records[0].s3.object.key
    const clientId = objectKeys.split("/")[1]
    try {
      const labelList = event.responsePayload.Labels
      await Promise.all(labelList.map(async label => {
        const labeledFood = label.Name
        const tacoResponse = await TACO.find({description: {'$regex': labeledFood}})
        if(tacoResponse.length > 0){
            const assignmentModel = {
                label: labeledFood,
                nutritionalFacts: []
            }
            tacoResponse.map((foodCandidate, index) =>{
                const verify = foodCandidate.description.split(',')[0]
                if(labeledFood == verify){
                    assignmentModel.nutritionalFacts.push(tacoResponse[index])
                }
            })
            assignedFoods.push(assignmentModel)
        }
      }))
    const consolidatedResponse = {
        userId: clientId,
        consolidatedScannedFood: assignedFoods,
        createDate: event.timestamp
    }
    console.log(consolidatedResponse.consolidatedScannedFood[0].nutritionalFacts )
    await ScannedFoods.insertMany(consolidatedResponse)
    console.log("Consolidated Response - Ok!")
    } catch (error) {
      console.log(error)
    }

  };
  module.exports = hello