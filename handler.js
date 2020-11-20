const R = require("ramda");
const MangooDBConnect = require("./database/mangoodbConnect");
const createConsolidatedScan = require("./factory/foodAggregateRecognitionFactory");
const {
  IncomingS3EventNotFound,
  RekoNotFoundExcpetion,
} = require("./exceptions/payloadExceptions");
const { findTacoFoodDescriptionByName, insertValidatedFoodAssignment } = require("./mongoTransactions");
const createPreassigneModel = require("./factory/modelPreassignFactory");
const { verifyGeneralFoodMismatch } = require("./operations");

MangooDBConnect();

const mangoDBOperations = async (event) => {
  let assignedFoods = [];
  try {
    const s3EventObject = R.pathOr(
      null,
      ["requestPayload", "Records", [0], "s3"],
      event
    );
    if (!s3EventObject)
      throw new IncomingS3EventNotFound(
        `Evento de upload não contém informações do S3 no eventId: ${event.requestContext.requestId}`
      );

    const objectKeys = R.path(["object", "key"], s3EventObject);
    const bucketName = R.path(["bucket", "name"], s3EventObject);
    const userId = R.split("/", objectKeys)[1];
    const photo = R.split("/", objectKeys)[2];

    const labelList = R.pathOr(null, ["responsePayload", "Labels"], event);
    if (!labelList)
      throw new RekoNotFoundExcpetion(
        `Não foi possível identificar os objetos do eventId: ${event.requestContext.requestId}`
      );

    await Promise.all(
      labelList.map(async (label) => {
        //TODO: Remove unrelated labels (Fork, Cutlery, Dish)
        const labeledFood = label.Name;
        const tacoResponse = await findTacoFoodDescriptionByName(labeledFood);
        if (tacoResponse.length > 0) {
          const preAssignmentModel = createPreassigneModel(labeledFood);

          tacoResponse.map((foodCandidate) => {
            const verifiedFoodLabel = verifyGeneralFoodMismatch(
              labeledFood,
              foodCandidate
            );
            if(verifiedFoodLabel){
                preAssignmentModel.nutritionalFacts.push(foodCandidate);
            }
          });
            assignedFoods.push(preAssignmentModel);
        }
      })
    );

    const consolidatedResponse = createConsolidatedScan(
      userId,
      assignedFoods,
      event.timestamp,
      `https://${bucketName}.s3.amazonaws.com/uploads/${userId}/${photo}`
    );
    console.log(
      consolidatedResponse
    );
    await insertValidatedFoodAssignment(consolidatedResponse)
    
  } catch (error) {
    console.error(error);
  }
};
module.exports = mangoDBOperations;
