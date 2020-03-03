'use strict'

class AdminController {
    async index({response}) {
        let admin = await Admin.all();

        return response.json({
            message: admin
        })
    }
}

module.exports = AdminController
