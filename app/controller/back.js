const path = require('path')
const fs = require('fs')
const sendToWormhole = require('stream-wormhole')
const awaitWriteStream = require('await-stream-ready').write
const _filepath = 'app/datas/images'
module.exports = app => {
  return class AppController extends app.Controller {
    async login() {
      const { ctx } = this
      await ctx.renderClient('back/Login.js')
    }
    async list() {
      const { ctx } = this
      await ctx.renderClient('back/List.js')
    }
    async upload() {
      const { ctx } = this
      await ctx.renderClient('back/Upload.js')
    }
    async uploadImage() {
      const { ctx } = this
      const stream = await ctx.getFileStream()
      const filename = Date.now() + stream.filename
      const target = path.join(this.config.baseDir, _filepath, filename)
      const writeStream = fs.createWriteStream(target)
      try {
        await awaitWriteStream(stream.pipe(writeStream))
      } catch (err) {
        await sendToWormhole(stream)
        throw err
      }
      ctx.body = {
        url: '/' + _filepath + '/' + filename
      }
    }
  }
}
