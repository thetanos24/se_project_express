const { ERROR_CODES } = require("../constants");

class ForbiddenError extends Error {
  constructor(message) {
    super(message);
    this.name = "ForbiddenError";
    this.statusCode = ERROR_CODES.FORBIDDEN;
  }
}

module.exports = ForbiddenError;
