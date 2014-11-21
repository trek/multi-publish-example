## An example of multi-builds

ES6 Allows use to author in one format and reliable transform to
others.

It also allows people who know [minifcation is not enough](http://blog.sethladd.com/2013/01/minification-is-not-enough-you-need.html) the ability to author in ES6 and tree shake their application, removing unused code.

### Use
```shell
npm install -g broccoli-cli
npm install
broccoli build dist
```

Now you have AMD, CJS, and Globals builds in a `/dist` folder, ready for publication.

People can cosnume them:

```javascript
// cjs
var A = require('multi-build-test').A;

//amd
require('multi-build-test/bees', function(queen, honey){});

// es6
import {A} from "multi-build-test";

### Publishing to NPM
There are two scripts referenced in `package.json` for pre- and post-publish that
will build the CJS build into `dist/cjs`. `main` is set to `dist/cjs/index.js`.

The `.npmignore` file is set to ignore the non-npm related builds and files.