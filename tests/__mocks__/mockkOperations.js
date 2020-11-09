const returnsFoodLabel = () => {
  return "Egg";
};

const returnsFoodCandidateOnMismatch = () => {
  return { description: "Eggplant, raw" };
};

const returnsFoodCandidateOnMatch = () => {
  return { description: "Egg, chicken, white, cooked / 10minutes" };
};

module.exports = {
  returnsFoodCandidateOnMatch,
  returnsFoodCandidateOnMismatch,
  returnsFoodLabel,
};
