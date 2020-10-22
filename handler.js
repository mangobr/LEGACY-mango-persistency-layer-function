"use strict";

module.exports.mangoDBOperations = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: "teste 22-10",
      input: event,
    }),
  };
  callback(null, response);
};
