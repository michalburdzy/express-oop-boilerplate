class ExampleService {
  constructor({ repository }) {
    this.repository = repository;
  }

  process(req) {
    return this.repository.get(req);
  }
}

module.exports = ExampleService;
