const { ERROR_CODES } = require("../constants");

class UnauthorizedError extends Error {
  constructor(message) {
    super(message);
    this.name = "UnauthorizedError";
    this.statusCode = ERROR_CODES.UNAUTHORIZED;
  }
}

module.exports = UnauthorizedError;
