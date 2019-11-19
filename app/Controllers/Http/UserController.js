'use strict'
const Response = use('App/Controllers/Response')
const User = use('App/Models/User')

class UserController {

    /**
     * Get all user
     */
    async index() {
        let user = await User.all()

        return Response.success('Success retrive user data from database', user)
    }

    /**
     * Store user
     * @param {*} request 
     */
    async store({request}) {
        let user = new User()
        let postRequest = request.post()

        user.username = postRequest.username
        user.email = postRequest.email
        user.password = postRequest.password

        await user.save()

        return Response.success('Success store user data to database', user)
    }

    /**
     * Get single user
     * @param {*} params 
     */
    async detail({params}) {
        let user = await User.find(params.id)

        return Response.success('Success get user data from database', user)
    }

    /**
     * Update user
     * @param {*} params
     * @param {*} request 
     */
    async update({params, request}) {
        let user = await User.find(params.id)
        let requestBody = request.post()

        user.username = requestBody.username
        user.email = requestBody.email
        user.password = requestBody.password

        await user.save()

        return Response.success('Success update user data to database', user)
    }

    /**
     * Delete user
     * @param {*} params
     * 
     * @return json
     */
    async delete({params}) {
        let user = await User.find(params.id)

        await user.delete()

        return Response.success('Success delete user data from database')
    }

}

module.exports = UserController
