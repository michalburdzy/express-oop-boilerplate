const BaseRepository = require('../../core/baseRepository');

class ExampleRepository extends BaseRepository {
  async get() {
    return new Promise((res) => setTimeout(() => res({ message: 'Success' })));
  }
}

module.exports = ExampleRepository;
