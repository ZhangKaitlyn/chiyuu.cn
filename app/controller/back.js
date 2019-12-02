const path = require('path')
const fs = require('fs')
const sendToWormhole = require('stream-wormhole')
const awaitWriteStream = require('await-stream-ready').write
const _filepath = 'datas/images'
const worksJsonPath = './app/datas/works.json'
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
        filename: filename
      }
    }
    async image() {
      const { ctx } = this
      let { filename } = ctx.query
      console.log(ctx.query)
      console.log(filename)
      ctx.body = {
        message: filename
      }
    }
    async newWork() {
      const { ctx } = this
      const params = ctx.request.body
      fs.readFile(worksJsonPath, (err, data) => {
        if (err) {
          console.log(err)
          ctx.body = {
            message: 'read json file error:' + err
          }
          return
        }
        let worksList = JSON.parse(data.toString())
        worksList.push(params)
        fs.writeFile(worksJsonPath, JSON.stringify(worksList), err => {
          if (err) {
            console.log(err)
            ctx.body = {
              message: 'write json file error:' + err
            }
            return
          }
          ctx.body = {
            message: 'success'
          }
          return
        })
      })
    }
  }
}
