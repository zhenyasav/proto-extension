import { App } from "./generated_code";

const app = new App();
// declaration came from the core
console.log("currentUser()", app.currentUser()); 
// type-safe declaration merged from a plugin
console.log("extensionMethod()", app.extensionMethod()); 
