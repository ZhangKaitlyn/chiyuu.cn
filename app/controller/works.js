module.exports = app => {
  return class AppController extends app.Controller {
    async index() {
      const { ctx } = this
      await ctx.renderClient('works/works.js')
    }
    async detail() {
      const { ctx } = this
      await ctx.renderClient('detail/detail.js')
    }
  }
}
