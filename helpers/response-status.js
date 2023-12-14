class Response {
    static LoginSuccessResponse(token, data = null) {
        return {
          status: true,
          status_code: 200,
          message:'Login Successfully',
          token,
          data,
        };
      }
    static FetchSuccessResponse(data = null) {
      return {
        status: true,
        status_code: 200,
        message:'Record fetch successfully',
        data,
      };
    }

    static InsertSuccessResponse(data = null) {
        return {
          status: true,
          status_code: 201,
          message:'Record created successfully',
          data:data
        };
      }
  
    static errorResponse(statusCode, message) {
      return {
        status: false,
        status_code: statusCode,
        message:message
      };
    }
  }
  
  module.exports = Response;