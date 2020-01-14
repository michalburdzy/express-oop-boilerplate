const ExampleEndpoint = require('../../../../../src/domains/example/endpoints/exampleEndpoint');

describe('exampleEndpoint', () => {
  describe('process', () => {
    test('runs correctly', async () => {
      const exampleService = {
        process: jest.fn().mockReturnValue('ok'),
      };
      const endpoint = new ExampleEndpoint({ service: exampleService });
      const result = await endpoint.process('data');

      expect(result.body).toBe('ok');
      expect(exampleService.process).toBeCalledWith('data');
    });
  });
});
