'use strict'

const Company = use('App/Models/Company')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with companies
 */
class CompanyController {
  /**
   * Show a list of all companies.
   * GET companies
   */
  async index () {
    return await Company.query().setHidden(['created_at', 'updated_at']).with('user').fetch();
  }

  /**
   * Create/save a new company.
   * POST companies
   * @param {Request} ctx.request
   */
  async store ({ request }) {
    const data = request.only(['cnpj'])
    return await Company.create({...data})
  }

  /**
   * Display a single company.
   * GET companies/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing company.
   * GET companies/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update company details.
   * PUT or PATCH companies/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a company with id.
   * DELETE companies/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = CompanyController
