# Lu Ban Stylelint Config

## Install

```sh
npm i -D stylelint @luban-ui/stylelint-config
```

## Create config file

With ["type": "module"](https://nodejs.org/api/packages.html#type) in package.json (recommended):

```js
// stylelint.config.js
import luban from '@luban-ui/stylelint-config';

/** @type {import('stylelint').Config} */
export default {
  extends: [luban()]
  // ...other stylelint options
};
```

With CJS:

```js
// stylelint.config.js
const luban = require('@luban-ui/stylelint-config').default;

module.exports = {
  extends: [luban()]
  // ...other stylelint options
};
```
