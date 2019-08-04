
module.exports = app => {
  // app.get('/', app.controller.home.home.index);
  app.get('/', app.controller.works.index);
  app.get('/works', app.controller.works.index);
  app.get('/detail', app.controller.works.detail);
  app.get('/about', app.controller.about.index);
  app.get('/header', app.controller.home.home.header);
};
