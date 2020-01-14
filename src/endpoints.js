const ExampleEndpoint = require('./domains/example/endpoints/exampleEndpoint');
const ExampleService = require('./domains/example/services/exampleService');
const ExampleRepository = require('./domains/example/exampleRepository');

module.exports = () => {
  const exampleRepository = new ExampleRepository();
  const exampleService = new ExampleService({ repository: exampleRepository });

  return [new ExampleEndpoint({ service: exampleService })];
};
