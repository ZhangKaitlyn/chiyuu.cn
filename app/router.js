module.exports = app => {
  // app.get('/', app.controller.home.home.index);
  app.get('/', app.controller.works.index)
  app.get('/works', app.controller.works.index)
  app.get('/detail', app.controller.works.detail)
  app.get('/about', app.controller.about.index)

  app.get('/api/works', app.controller.backend.works.getWorksList)

  app.get('/back/login', app.controller.back.login)
  app.get('/back/list', app.controller.back.list)
  app.get('/back/upload', app.controller.back.upload)
}
