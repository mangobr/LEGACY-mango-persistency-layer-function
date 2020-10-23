const {
  findTacoFoodDescriptionByName,
  insertValidatedFoodAssignment,
} = require("./mongoTransactions");

const someFx = (labelList) => {
  labelList.map(async (label) => {
    const tacoResponse = await findTacoFoodDescriptionByName(label.Name);
    if (tacoResponse.length > 0) {
      tacoResponse.map((foodCandidate, index) => {
        const verifiedFoodLabel = verifyGeneralFoodMismatch(
          label.Name,
          foodCandidate
        );
      });
    }
  });
};

const verifyGeneralFoodMismatch = (foodLabel, foodCandidate) => {
  const foodCandidateFirstWord = foodCandidate.description.split(",")[0];
  if (foodCandidateFirstWord === foodLabel) return foodCandidate;
};

module.exports = {
    verifyGeneralFoodMismatch
}
