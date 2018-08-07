const builder = require('api-console-builder');
builder({
  destination: 'api-console-build', // Optional, default to "build"
  api: 'api.raml',
  apiType: 'RAML 1.0'
})
.then(() => console.log('Build complete <3'))
.catch((cause) => console.log('Build error <\\3', cause.message));
