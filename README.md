# Lu Ban Stylelint Config

## Install

```sh
npm i -D eslint @luban-ui/stylelint-config
```

## Create config file

With ["type": "module"](https://nodejs.org/api/packages.html#type) in package.json (recommended):

```js
// eslint.config.js
import luban from '@luban-ui/stylelint-config';

export default {
  ...luban()
  // ...other stylelint options
};
```

With CJS:

```js
// eslint.config.js
const luban = require('@luban-ui/stylelint-config').default;

module.exports = {
  ...luban()
  // ...other stylelint options
};
```
