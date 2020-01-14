const ExampleService = require('../../../../../src/domains/example/services/exampleService');

describe('exampleService', () => {
  describe('process', () => {
    test('runs correctly', async () => {
      const exampleRepository = {
        get: jest.fn().mockReturnValue('ok'),
      };
      const service = new ExampleService({ repository: exampleRepository });
      const result = await service.process('data');

      expect(result).toBe('ok');

      expect(exampleRepository.get).toBeCalledWith('data');
    });
  });
});
