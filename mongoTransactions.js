const TACO = require("./database/models/tacoSchema");
const ScannedFoods = require("./database/models/scannedFoodsSchema");
const {
  mongoFindTransactionException,
  mongoInsertTransactionException,
} = require("./exceptions/mongoExcpetions");

const findTacoFoodDescriptionByName = async (labeledFood) => {
  try {
    return await TACO.find({
      description: { $regex: { labeledFood } },
    });
  } catch (error) {
    console.error("Error while finding food description: ", error);
    throw mongoFindTransactionException(
      `Erro ao buscar pelo alimento na TACO com a label: ${labeledFood}`
    );
  }
};

const insertValidatedFoodAssignment = async (consolidatedResponse) => {
  try {
    await ScannedFoods.insertMany(consolidatedResponse);
  } catch (error) {
    console.error("Error while inserting in Mongo: ",error);
    throw mongoInsertTransactionException(
      `Erro ao salvar ${consolidatedResponse} no Banco`
    );
  }
};

module.exports = {
  findTacoFoodDescriptionByName,
  insertValidatedFoodAssignment,
};
