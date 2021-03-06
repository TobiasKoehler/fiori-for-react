<a name="top"></a>
# fiori-for-react
<p align="center">
  <a href="https://travis-ci.org/SAP/fiori-for-react" target="_blank">
    <img alt="Build Status" src="https://img.shields.io/travis/SAP/fiori-for-react/master.svg">
  </a>
  <a href="https://coveralls.io/github/SAP/fiori-for-react" target="_blank">
    <img alt="Code Coverage" src="https://img.shields.io/coveralls/github/SAP/fiori-for-react/master.svg">
  </a>
  <a href="https://sap-ea.slack.com/messages/CEN48B210" target="_blank">
    <img alt="Slack Badge" src="https://badgen.net/badge/slack/fiori-for-react/orange?icon=slack">
  </a>
  <a href="https://github.com/prettier/prettier" target="_blank">
    <img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg"> 
  </a>
  <a href="https://lernajs.io/" target="_blank">
  <img alt="lerna" src="https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg">
  </a>

</p>

<!-- *********************************************************************** -->
<a name="contents"></a>
## Table of Contents
1. [Description](#description)
2. [Requirements](#requirements)
3. [Download & Installation](#download)
4. [Configuration](#configuration)
5. [Known Issues](#issues)
6. [Support](#support)
7. [Contributing](#contributing)
8. [License](#license)

<!-- *********************************************************************** -->
<a name="description"></a>
## Description

`fiori-for-react` is providing a Fiori-compliant React implementation by leveraging the [UI5 Web Components](https://github.com/SAP/ui5-webcomponents).

### Explore our components
You can play around with our components by visiting our [Storybook](https://sap.github.io/fiori-for-react/).

### Package Overview

#### [@fiori-for-react/fiori3](https://github.com/SAP/fiori-for-react/tree/master/packages/fiori3) - Fiori 3 Components
![https://www.npmjs.com/package/@fiori-for-react/fiori3](https://img.shields.io/npm/v/@fiori-for-react/fiori3.svg) 
![https://bundlephobia.com/result?p=@fiori-for-react/fiori3](https://img.shields.io/bundlephobia/min/@fiori-for-react/fiori3.svg?label=size) 
![https://bundlephobia.com/result?p=@fiori-for-react/fiori3](https://img.shields.io/bundlephobia/minzip/@fiori-for-react/fiori3.svg?label=gzip%20size)

#### [@fiori-for-react/styles](https://github.com/SAP/fiori-for-react/tree/master/packages/styles) - Styles
![https://www.npmjs.com/package/@fiori-for-react/styles](https://img.shields.io/npm/v/@fiori-for-react/styles.svg)
![https://bundlephobia.com/result?p=@fiori-for-react/styles](https://img.shields.io/bundlephobia/min/@fiori-for-react/styles.svg?label=size) 
![https://bundlephobia.com/result?p=@fiori-for-react/styles](https://img.shields.io/bundlephobia/minzip/@fiori-for-react/styles.svg?label=gzip%20size)

#### [@fiori-for-react/utils](https://github.com/SAP/fiori-for-react/tree/master/packages/utils) - Utils
![https://www.npmjs.com/package/@fiori-for-react/utils](https://img.shields.io/npm/v/@fiori-for-react/utils.svg)
![https://bundlephobia.com/result?p=@fiori-for-react/utils](https://img.shields.io/bundlephobia/min/@fiori-for-react/utils.svg?label=size) 
![https://bundlephobia.com/result?p=@fiori-for-react/utils](https://img.shields.io/bundlephobia/minzip/@fiori-for-react/utils.svg?label=gzip%20size)

#### [@fiori-for-react/charts](https://github.com/SAP/fiori-for-react/tree/master/packages/charts) - Fiori Charts 
![https://www.npmjs.com/package/@fiori-for-react/charts](https://img.shields.io/npm/v/@fiori-for-react/charts.svg)
![https://bundlephobia.com/result?p=@fiori-for-react/charts](https://img.shields.io/bundlephobia/min/@fiori-for-react/charts.svg?label=size) 
![https://bundlephobia.com/result?p=@fiori-for-react/charts](https://img.shields.io/bundlephobia/minzip/@fiori-for-react/charts.svg?label=gzip%20size)


<!-- *********************************************************************** -->
<a name="requirements"></a>
## Requirements

- [Node.js](https://nodejs.org/) (**version 8.5 or higher** ⚠️)
- [React](https://www.npmjs.com/package/react) and [React-DOM](https://www.npmjs.com/package/react-dom) (**16.4.2 or higher**)


<!-- *********************************************************************** -->
<a name="download"></a>
## Download and Installation

To consume `fiori-for-react`, first you need to install the npm module:
```sh
npm install @fiori-for-react/fiori3 --save
```

<!-- *********************************************************************** -->
<a name="configuration"></a>
## Configuration

**Prerequisite: You have a React app.** In case you don't, we recommend to create one using [create-react-app](https://facebook.github.io/create-react-app/).<br/>
In order to use `fiori-for-react` you have to wrap your application's root component into the `ThemeProvider`.<br/>
You will find this component most likely in `src/App.js`: 
```js
import { ContentDensity, ThemeProvider, Themes } from '@fiori-for-react/fiori3';
...
render() {
  return (
    <div>
      <ThemeProvider theme={Themes.sap_fiori_3} contentDensity={ContentDensity.Compact} withToastContainer>
        <MyApp />
      </ThemeProvider>
    </div>
  );
}
```

Then, you are ready to use `fiori-for-react` and you can import the desired component(s) in your app:<br />
For example, to use ```Button``` you need to import it:

```jsx
import { Button } from '@fiori-for-react/fiori3'; // loads ui5-button wrapped in a fiori-for-react component
```

Then, you can use the Button in your app:

```jsx
<Button onPress={() => alert('Hello World!')}>Hello world!</Button>
```


<!-- *********************************************************************** -->
<!-- <a name="limitations"></a> -->
<!-- ## Limitations -->



<!-- *********************************************************************** -->
<a name="issues"></a>
## Known Issues

Please look at our [GitHub Issues](https://github.com/SAP/fiori-for-react/issues) .



<!-- *********************************************************************** -->
<a name="support"></a>
## Support

This project is provided "as-is": there is no guarantee that raised issues will be answered or addressed in future releases.

<!-- *********************************************************************** -->
<a name="contributing"></a>
## Contributing
Please check our [Contribution Guidelines](/CONTRIBUTING.md).

<!-- *********************************************************************** -->
## License
Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
This file is licensed under the Apache Software License, Version 2.0 except as noted otherwise in the [LICENSE](/LICENSE) file.
