const TACO = require("./database/models/tacoSchema");
const ScannedFoods = require("./database/models/scannedFoodsSchema");
const {
  mongoFindTransactionException,
  mongoInsertTransactionException,
} = require("./exceptions/mongoExcpetions");

const findTacoFoodDescriptionByName = async (labeledFood) => {
  try {
    const tacoLabel = await TACO.find({
      description: { $regex: labeledFood },
    });
    return JSON.parse(JSON.stringify(tacoLabel));
  } catch (error) {
    console.error("Erro ao encontrar a descrição do alimento: ", error);
    throw mongoFindTransactionException(
      `Erro ao buscar pelo alimento na TACO com a label: ${labeledFood}`
    );
  }
};

const insertValidatedFoodAssignment = async (consolidatedResponse) => {
  try {
    await ScannedFoods.insertMany(consolidatedResponse);
  } catch (error) {
    console.error("Erro na inserção do labeling consolidado no Mongo: ", error);
    throw mongoInsertTransactionException(
      `Erro ao salvar ${consolidatedResponse} no Banco`
    );
  }
};

module.exports = {
  findTacoFoodDescriptionByName,
  insertValidatedFoodAssignment,
};
