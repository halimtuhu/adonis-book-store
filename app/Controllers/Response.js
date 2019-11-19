'use strict'

class Response {

    static success(message, data = null) {
        return {
            status: true,
            message: message,
            data: data
        }
    }

    static failure(message, data = null) {
      return {
        status: false,
        message: message,
        data: data
      }
    }

}

module.exports = Response