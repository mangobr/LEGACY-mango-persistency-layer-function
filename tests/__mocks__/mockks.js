const scannedFoodMockk = require('./json/scannedFooodMock.json')
const tacoFood = require('./json/mockkMangoDB.json')

const returnsFoodLabel = () => {
  return "Egg";
};

const returnsFoodCandidateOnMismatch = () => {
  return { description: "Eggplant, raw" };
};

const returnsFoodCandidateOnMatch = () => {
  return { description: "Egg, chicken, white, cooked / 10minutes" };
};

const returnConsolidatedFoodScan = () => {
    return scannedFoodMockk[0]
}

returnConsolidatedFoodScan()

const returnTacoFood = () =>{
    // console.log(tacoFood[0])
    return tacoFood
}
returnTacoFood()
module.exports = {
  returnsFoodCandidateOnMatch,
  returnsFoodCandidateOnMismatch,
  returnsFoodLabel,
  returnConsolidatedFoodScan,
  returnTacoFood
};
