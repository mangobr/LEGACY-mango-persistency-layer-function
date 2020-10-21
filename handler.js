"use strict";

module.exports.mangoDBOperations = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: "foi agora",
      input: event,
    }),
  };
  callback(null, response);
};
