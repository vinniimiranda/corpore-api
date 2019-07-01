'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Student extends Model {
    static boot () {
        super.boot()
    
        
      }
    company() {
        return this.belongsTo('App/Models/Company');
      }
}

module.exports = Student
