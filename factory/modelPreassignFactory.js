const modelPreassignFactory = (labeledFood) => {
    return {
        label: labeledFood,
        nutritionalFacts: [],
    }
}

const create = (labeledFood) => {
    return modelPreassignFactory(labeledFood)
}

module.exports = create;
