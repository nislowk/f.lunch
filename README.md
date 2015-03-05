<h1 align="center">f.lunch</h1>

## Installation:

### Meteor
```
$ curl https://install.meteor.com/ | sh
```
### Bower
```
$ npm install -g bower
```
### Project

<b> Note: Project dependencies, assets, & meteor packages will automatically be included in this install </b>

1. Clone the repository ```git clone https://github.com/nislowk/f.lunch```
2. From the root directory of the meteor app, run `bower install`
  - This will install Polymer, web components, & vulcanize
  - Also, includes some custom elements we made so you can see how that works
3. Start the Meteor server `meteor`
4. Web Components should be installed correctly

## Integrating Polymer:

### Including webcomponents.js

In `client/templates/layout/head.html`, there is a line that looks like this:

```
<script src="/components/webcomponentsjs/webcomponents.js"></script>
```

This is very important because it includes the web components polyfill.

### Vulcanized imports.html

* This is where you list what Polymer components you want to load, from polymer core, paper-elements, and any custom components. Elements are contained in `client/templates/layout/imports.html` which is then compiled with [Vulcanize](https://github.com/Polymer/vulcanize) and the [`differential-vulcanize`](https://github.com/Differential/meteor-vulcanize) package to concatenate the web components into one file.

* After running `bower install`, your components will placed into the `public/components` directory path, which you can edit in the `.bowerrc` file

* There are customized polymer overrides in the `client/stylesheets/components` folder

## Deploy Project:

* Run your production deploy command with a `VULCANIZE=true` environment variable. i.e.. `VULCANIZE=true modulus deploy`
