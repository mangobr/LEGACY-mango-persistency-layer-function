const foodAggregateRecognitionFactory = (userId, consolidatedScannedFood, createDate) => {
    return {
        userId: userId,
        consolidatedScannedFood: consolidatedScannedFood,
        createDate: createDate,
        updateDate: null,
    }
}

const create = (userId, consolidatedScannedFood, createDate) => {
    return foodAggregateRecognitionFactory(userId, consolidatedScannedFood, createDate)
}

module.exports = create;