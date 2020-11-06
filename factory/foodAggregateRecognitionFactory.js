const foodAggregateRecognitionFactory = (userId, consolidatedScannedFood, createDate, s3URL) => {
    return {
        userId: userId,
        consolidatedScannedFood: consolidatedScannedFood,
        createDate: createDate,
        updateDate: null,
        s3URL: s3URL
    }
}

const create = (userId, consolidatedScannedFood, createDate, s3URL) => {
    return foodAggregateRecognitionFactory(userId, consolidatedScannedFood, createDate, s3URL)
}

module.exports = create;