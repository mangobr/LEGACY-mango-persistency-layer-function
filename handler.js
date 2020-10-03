'use strict';
const MangooDBConnect = require('./database/mangoodbConnect')
const TACO = require('./database/models/tacoSchema')

MangooDBConnect();


  const hello = async event => {
    let assignedFoods = []
    const objectKeys = event.requestPayload.Records[0].s3.object.key
    console.log(objectKeys)
    const clientId = objectKeys.split("/")[1]
    console.log(clientId)
    // try {
    //   const labelList = event.responsePayload.Labels
    //   await Promise.all(labelList.map(async label => {
    //     const labeledFood = label.Name
    //     const tacoResponse = await TACO.find({description: {'$regex': labeledFood}})
    //     if(tacoResponse != []){
    //       assignedFoods.push(tacoResponse)
    //     }
    //   }))
    //   const filteredAssignedFood = assignedFoods.filter(itemToRemove => {
    //     return itemToRemove != []
    //   })
    //   console.log(filteredAssignedFood)
    // } catch (error) {
    //   console.log(error)
    // }

  };
  module.exports = hello