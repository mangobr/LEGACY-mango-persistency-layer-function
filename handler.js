'use strict';
const MangooDBConnect = require('./database/mangoodbConnect')
const TACO = require('./database/models/tacoSchema')

MangooDBConnect();


  const hello = async event => {
    let assignedFoods = []
    try {
      const labelList = event.responsePayload.Labels
      await Promise.all(labelList.map(async label => {
        const labeledFood = label.Name
        const tacoResponse = await TACO.find({description: {'$regex': labeledFood}})
        if(tacoResponse != []){
          assignedFoods.push(tacoResponse)
        }
      }))
      const filteredAssignedFood = assignedFoods.filter(itemToRemove => {
        return itemToRemove != []
      })
      console.log(filteredAssignedFood)
    } catch (error) {
      console.log(error)
    }
  
    // return {
    //   statusCode: 200,
    //   body: JSON.stringify(
    //     {
    //       message: 'Go Serverless v1.0! Your function executed successfully!',
    //       input: event,
    //     },
    //     null,
    //     2
    //   ),
    // };
  
    // Use this code if you don't use the http event with the LAMBDA-PROXY integration
    // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
  };
  module.exports = hello