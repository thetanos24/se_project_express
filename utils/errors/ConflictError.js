const { ERROR_CODES } = require("../constants");

class ConflictError extends Error {
  constructor(message) {
    super(message);
    this.name = "ConflictError";
    this.statusCode = ERROR_CODES.CONFLICT;
  }
}

module.exports = ConflictError;
