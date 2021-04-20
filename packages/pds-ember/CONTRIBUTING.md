# How To Contribute

**TODO: NEEDS UPDATE!**


## Installation

* `git clone <repository-url>`
* `cd pds-ember`
* `yarn install`


## Linting

* `yarn lint:hbs`
* `yarn lint:js`
* `yarn lint:js --fix`


## Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions


## Storybook
* To generate JSON docs for storybook: `yarn workspace @hashicorp/pds-ember start` (might be the same as `ember serve`)
* Storybook does not rebuild on save currently.  If you want to see a component's change you have to `yarn storybook build && yarn storybook` each time between changes. (See issue [#72](https://github.com/hashicorp/structure/issues/72) )



## Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4300](http://localhost:4300).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).


