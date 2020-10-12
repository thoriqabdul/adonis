'use strict'

const base = use('App/Controllers/Http/BaseController')
const data = use('App/Models/User')

class UserController extends base {
    constructor () { 
        super()
        this.data = data
      }
}

module.exports = UserController
