const verifyGeneralFoodMismatch = (foodLabel, foodCandidate) => {
  const foodCandidateFirstWord = foodCandidate.description.split(",")[0];
  if (foodCandidateFirstWord === foodLabel) return foodCandidate;
};

module.exports = {
    verifyGeneralFoodMismatch,
}
