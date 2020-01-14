#@hashicorp/structure-core

Structure is HashiCorp's product design system. This addon provides many Ember components and styling primitives along with the necessary build system hooks to filter the components and Sass files that a consuming Ember app can specify.


##Compatibility

* Ember.js v3.4 or above
* Ember CLI v2.13 or above
* Node.js v8 or above


##Installation

```
ember install @hashicorp/structure-core
```


##Usage

### Components
After installation, you will have to configure your app to include the components that you want to use. By default no components are added to your application's build. To choose what components you would like to include, use a config block in your application's `ember-cli-build.js` file.

Currently the only configuration supported is specifying an array of component names for the `include` attribute. It will look something like this: 

```
var app = new EmberApp(defaults, {
  '@hashicorp/structure-core': {
    include: [
      'st-icon',
      'st-input',
    ],
  },
});
```

A special value of `'all'` can also be used if you want to include all of the components in `@hashicorp/structure-core` instead of enumerating the component names: 

```
var app = new EmberApp(defaults, {
  '@hashicorp/structure-core': {
    include: [
      'all',
    ],
  },
});
```

##Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.


##License

This project is licensed under the [MPL2 License](LICENSE.md).
