const { ERROR_CODES } = require("../constants");

class BadRequestError extends Error {
  constructor(message) {
    super(message);
    this.name = "BadRequestError";
    this.statusCode = ERROR_CODES.BAD_REQUEST;
  }
}

module.exports = BadRequestError;
