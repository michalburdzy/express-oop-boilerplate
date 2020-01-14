const BaseEndpoint = require('../../../core/baseEndpoint');
const AppResponse = require('../../../core/appResponse');
const AppError = require('../../../core/appError');

const exampleValidator = require('../validators/exampleValidator');

class ExampleEndpoint extends BaseEndpoint {
  constructor({ service }) {
    super('GET', '/');
    this.service = service;
  }

  get validator() {
    return exampleValidator;
  }

  async process(req) {
    const response = await this.service.process(req);

    if (!response) {
      throw new AppError();
    }

    return new AppResponse(200, response);
  }
}

module.exports = ExampleEndpoint;
