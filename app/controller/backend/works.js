const fs = require('fs')
const worksList = require('../../datas/works.json')

module.exports = app => {
  return class AppController extends app.Controller {
    async index() {
      const { ctx } = this
      await ctx.renderClient('works/works.js')
    }
    async getWorksList() {
      const { ctx } = this
      ctx.body = worksList
    }
  }
}
