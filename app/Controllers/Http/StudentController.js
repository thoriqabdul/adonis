'use strict'

const base = use('App/Controllers/Http/BaseController')
const data = use('App/Models/Student')

// const data = 'Tidak ada data'

class StudentController extends base {
    constructor () { 
        super()
        this.data = data
      }
    
}

module.exports = StudentController
