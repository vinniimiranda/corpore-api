'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Company extends Model {
    user() {
        return this.hasMany('App/Models/User')
    }
    students() {
        return this.hasMany('App/Models/Student')
    }

}

module.exports = Company
