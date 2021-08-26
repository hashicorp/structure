# How To Contribute

**TODO: NEEDS UPDATE!**


## Installation

* `git clone <repository-url>`
* `cd pds-ember`
* `yarn install`


## Linting

* `yarn lint`
* `yarn lint:fix`


## Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions


## Storybook
* To generate JSON docs for storybook: `yarn workspace @hashicorp/pds-ember start` (might be the same as `ember serve`)
* To run storybook: `yarn build-storybook`. _Notice: Storybook does not rebuild on save currently.  If you want to see a component's change you have to `yarn build-storybook && yarn storybook` each time between changes. (See issue [#72](https://github.com/hashicorp/structure/issues/72) )_

## SCSS
* If you are creating a variant css class for a component, use the folder structure.  See `HelpText` as a simple example and `Button` for a more complicated one.


## Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4300](http://localhost:4300).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).


