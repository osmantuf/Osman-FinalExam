export class App {
  configureRouter(config, router) {
    this.router = router;
    config.map([
      {
        route: ['','todo'],
        moduleId: './modules/todos',
        name: 'Todos'
      }
    ]);
  }
}

