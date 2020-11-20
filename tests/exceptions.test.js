const {
  MongoFindTransactionException,
  MongoInsertTransactionException
} = require("../exceptions/mongoExcpetions");
const {
  MissingPaylodException,
  RekoNotFoundExcpetion,
  IncomingS3EventNotFound,
} = require("../exceptions/payloadExceptions");

describe(`should test payload exceptions thrown along the code`, () => {
  it(`should validate MissingPayloadException http status code and message`, () => {
    const missigPayloadException = new MissingPaylodException(
      "Objeto de consolidação não deve ser nulo/undefined"
    );
    expect(missigPayloadException.message).toEqual(
      "Objeto de consolidação não deve ser nulo/undefined"
    );
    expect(missigPayloadException.status).toEqual(400);
  });

  it(`should validate RekoNotFoundExcpetion http status code and message`, () => {
    const rekoNotFoundExcpetion = new RekoNotFoundExcpetion(
      "Não foi possível identificar os objetos do eventId: "
    );
    expect(rekoNotFoundExcpetion.message).toEqual(
      "Não foi possível identificar os objetos do eventId: "
    );
    expect(rekoNotFoundExcpetion.status).toEqual(400);
  });

  it(`should validate IncomingS3EventNotFound http status code and message`, () => {
    const incomingS3EventNotFound = new IncomingS3EventNotFound(
      "Evento de upload não contém informações do S3 no eventId:"
    );
    expect(incomingS3EventNotFound.message).toEqual(
      "Evento de upload não contém informações do S3 no eventId:"
    );
    expect(incomingS3EventNotFound.status).toEqual(404);
  });
});

describe(`should test mongo exceptions thrown along the code`, () => {
  it(`should validate MongoFindTransactionException http status code and message`, () => {
    const mongoFindTransactionException = new MongoFindTransactionException(
      "Erro ao buscar pelo alimento na TACO com a label:"
    );
    expect(mongoFindTransactionException.message).toEqual(
      "Erro ao buscar pelo alimento na TACO com a label:"
    );
    expect(mongoFindTransactionException.status).toEqual(404);
  });

  it(`should validate MongoInsertTransactionException http status code and message`, () => {
    const mongoInsertTransactionException = new MongoInsertTransactionException(
      "Erro ao salvar no Banco"
    );
    expect(mongoInsertTransactionException.message).toEqual(
      "Erro ao salvar no Banco"
    );
    expect(mongoInsertTransactionException.status).toEqual(400);
  });
});
