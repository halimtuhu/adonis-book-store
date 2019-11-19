'use strict'

const Response = use('App/Controllers/Response')

class HomeController {

  index() {
    return Response.success(
        'Welcome to Adonis Book Store, take your time to look around'
    )
  }

  about() {
      return Response.success(
          'This is a book store made with AdonisJs one of best NodeJs framework out there. Feel free to open discuss about anything related to AdonisJs.'
      )
  }

}

module.exports = HomeController
