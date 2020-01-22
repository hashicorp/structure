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

By default all components - including those from _other addons_ so it's good to be aware of that (we may change this in the future but it is low risk for now) that start with `st-` will be excluded from the build.
To use components from this addon, you can add a configuration for `include` like this:

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

As shown here, `include` is an array of components to include. Specifying the special value of `all` like this:

```
var app = new EmberApp(defaults, {
  '@hashicorp/structure-core': {
    include: 'all',
  },
});
```

will opt your application in to include all of the components in that version of `structure-core`. Please note that this means upgrades may possibly include additional components.

##Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.


##License

This project is licensed under the [MPL2 License](LICENSE.md).
