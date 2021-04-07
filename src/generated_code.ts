import { App as Base } from "./app";
// import plugins
import { Plugin } from "./plugin";
// for each plugin, attach new behavior 
Base.extend(Plugin.prototype);
// re-export a new App type with new members
export class App extends Base {};
// add type information from plugins using declaration merging
export interface App extends Plugin {};