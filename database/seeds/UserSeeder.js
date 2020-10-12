'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const data = use('App/Models/User')

class UserSeeder {
  async run () {

    // menggunakan User model
    const user = new data
    user.username = 'thoriqd'
    user.email = 'admin@gmail.com'
    user.password = 'secret'
    await user.save()
  }
}

module.exports = UserSeeder
