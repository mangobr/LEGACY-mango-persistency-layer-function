const { describe, it } = require("@jest/globals");
const { verifyGeneralFoodMismatch } = require("../operations");
const {
  returnsFoodLabel,
  returnsFoodCandidateOnMatch,
  returnsFoodCandidateOnMismatch,
} = require("./__mocks__/mockks");

describe(`should test operations and tranformations prior database transactions`, () => {
  it(`should validate two equal foods on match`, () => {
      const verifiedLabel = verifyGeneralFoodMismatch(returnsFoodLabel(), returnsFoodCandidateOnMatch())
      expect(verifiedLabel).toEqual(returnsFoodCandidateOnMatch())
  });

  it(`should not validate two different foods on match`, () => {
    const verifiedLabel = verifyGeneralFoodMismatch(returnsFoodLabel(), returnsFoodCandidateOnMismatch())
    expect(verifiedLabel).not.toEqual(returnsFoodCandidateOnMismatch())
});
});
