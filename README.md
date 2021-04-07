# SDK Extensibility sample

Here is a proposal for how modules can extend each other's prototypes in order to 
reduce the number of concepts developers have to import when consuming a framework object

1. Developers add resources to their app
3. Code generation is used to emit plugin-loading code in the developer's project
2. Developers import the main class object from the code-generated file, and enjoy a dynamic, strongly typed API.

See [src/index.ts](src/index.ts) for a full example of usage.
See [src/generated_code.ts](src/generated_code.ts) to see how the App class is extended with a plugin

For more type-safe mixin guidance: https://www.typescriptlang.org/docs/handbook/mixins.html