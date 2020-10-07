# pds-ember

Ember addon for building Structure-styled UIs.


# Compatibility

* Ember.js v3.16 or above
* Ember CLI v2.13 or above
* Node.js v10 or above


# Installation

```
ember install @hashicorp/pds-ember
```


# Usage

## Styles
`ember-cli-sass` is required to make use of provided Sass assets.

```
ember install ember-cli-sass
```

All Sass modules are namespaced under the `pds/*` prefix, so you can apply all
available styles by adding the following to your `app/styles/app.scss`:

```sass
@use "pds";
```


## Icons
This addon uses `ember-svg-jar` to inline SVG icons via the `<Pds::Icon>` component.

```
ember install ember-svg-jar
```

No icons are currently provided by the addon, so you'll need to add your own and
configure your app to load them.

```javascript
let app = new EmberApp(defaults, {
  svgJar: {
    sourceDirs: [
      'public',
      'path/to/node_modules/package/with/icons',
      // ...
    ],
  },
});
```


# Contributing
See the [Contributing](CONTRIBUTING.md) guide for details.


# License
This project is licensed under the [MPLv2.0 License](LICENSE.txt).
