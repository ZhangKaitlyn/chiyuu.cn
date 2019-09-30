module.exports = app => {
  return class AppController extends app.Controller {
    async login() {
      const { ctx } = this
      await ctx.render('back/Login.js')
    }
    async list() {
      const { ctx } = this
      await ctx.render('back/List.js')
    }
    async upload() {
      const { ctx } = this
      await ctx.render('back/Upload.js')
    }
  }
}
