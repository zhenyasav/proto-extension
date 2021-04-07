// in some other package 'plugin-package', a plugin wants to add functionality to the global App import.
// 1. first, implement the new methods on a child class. Extending App is for convenience, and not required for this to work. It enables strong typing of the `this` keyword inside the method bodies.

import { App } from "./app";

export class Plugin extends App {
  extensionMethod() {
    return this;
  }
};