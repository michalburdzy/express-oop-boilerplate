class BaseEndpoint {
  constructor(method, url) {
    this._method = method.toLowerCase();
    this._url = url;
    this.name = this.constructor.name;
  }

  _execute(req, res) {
    return this.process(req, res);
  }

  // eslint-disable-next-line no-unused-vars
  process(req, res) {
    throw new Error('Need to be implemented');
  }

  get validator() {
    return null;
  }
}

module.exports = BaseEndpoint;
