const { ERROR_CODES } = require("../constants");

class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = "NotFoundError";
    this.statusCode = ERROR_CODES.NOT_FOUND;
  }
}

module.exports = NotFoundError;
