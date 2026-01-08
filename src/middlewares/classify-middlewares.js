const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");
const AppError = require("../utils/errors/app-error");

function validateClassifyRequest(req, res, next) {
    try {
    const contentType = req.get('Content-Type');
    if (!contentType || !contentType.includes('application/json')) {
      return res.status(StatusCodes.UNSUPPORTED_MEDIA_TYPE).json({
        success: false,
        message: 'Content-Type must be application/json',
        error: new AppError(
          ['Invalid Content-Type'],
          StatusCodes.UNSUPPORTED_MEDIA_TYPE
        )
      });
    }
    
    if (!req.body || typeof req.body !== 'object') {
      return res.status(StatusCodes.BAD_REQUEST).json({
        success: false,
        message: 'Invalid request body',
        error: new AppError(
          ['Request body is missing'],
          StatusCodes.BAD_REQUEST
        )
      });
    }
    
    const { text } = req.body;
    
    if (text === undefined || text === null) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        success: false,
        message: 'Text is required',
        error: new AppError(
          ['text field is required'],
          StatusCodes.BAD_REQUEST
        )
      });
    }
    
    if (typeof text !== 'string') {
      return res.status(StatusCodes.BAD_REQUEST).json({
        success: false,
        message: 'Text must be a string',
        error: new AppError(
          ['text must be a string'],
          StatusCodes.BAD_REQUEST
        )
      });
    }
    
    const trimmedText = text.trim();
    
    if (trimmedText.length === 0) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        success: false,
        message: 'Text cannot be empty',
        error: new AppError(
          ['text cannot be empty or whitespace only'],
          StatusCodes.BAD_REQUEST
        )
      });
    }
    
    const MIN_LENGTH = 1;
    const MAX_LENGTH = 1000;
    
    if (trimmedText.length < MIN_LENGTH || trimmedText.length > MAX_LENGTH) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        success: false,
        message: `Text must be between ${MIN_LENGTH} and ${MAX_LENGTH} characters`,
        error: new AppError(
          [`Text length must be between ${MIN_LENGTH} and ${MAX_LENGTH} characters`],
          StatusCodes.BAD_REQUEST
        )
      });
    }

    req.body.text = trimmedText;
    
    next();
  } catch (error) {
    console.error('Validation error:', error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: 'Internal server error during validation',
      error: new AppError(
        ['Validation processing failed'],
        StatusCodes.INTERNAL_SERVER_ERROR
      )
    });
  }
}

module.exports = { validateClassifyRequest };

