const exampleValidator = require('../../../../../src/domains/example/validators/exampleValidator');
const testValidator = require('../../../../testValidator');

describe('exampleValidator', () => {
  test('runs correctly', async () => {
    const exampleData = { body: {} };
    const result = testValidator(exampleValidator, exampleData);

    expect(result.value).toMatchObject(exampleData);
  });
});
