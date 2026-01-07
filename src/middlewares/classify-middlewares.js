const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");
const AppError = require("../utils/errors/app-error");

function validateClassifyRequest(req, res, next) {
// need more work on
  if (!req.body.text) {
    ErrorResponse.message = "Something went wrong while sending the request Text is required";
    ErrorResponse.error = new AppError(
      ["text not found in the incoming request in the correct form"],
      StatusCodes.BAD_REQUEST
    );

    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  next();
}

module.exports = { validateClassifyRequest };

