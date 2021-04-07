// global entry point for the SDK, the class providing extensibility
export class App {
  static extend(fields: Object) {
    if (fields) {
      // this could be done more carefully:
      // - warn when clobbering
      // - merge only own property names
      // - check for non-object values, ...etc
      Object.assign(App.prototype, fields);
    }
  }
  currentUser() { return { name: 'userFoo' }; }
}