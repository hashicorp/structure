# Structure [![npm version](https://badge.fury.io/js/%40hashicorp%2Fpds-ember.svg)](https://badge.fury.io/js/%40hashicorp%2Fpds-ember)

### 🚨 NOTICE 🚨

Currently this project in a "maintained sunsetting" mode. This means we're starting to remove deprecated/unused components from its codebase with the intent to completely remove as dependency from our products.

But don't worry, if you need to use the old project, there are a couple of "frozen in time" branches that you can use (and potentially even release from, if you need). See *"Which version to use?"* below.

### Which version to use?

The current version of this package is the one used for the "managed sunsetting" of the library from our products. As such, in time some components are deprecated and then removed from the repository, and some surgical patches to the code are done when necessary to facilitate the migration to the new UI library ([HashiCorp Design System components](https://github.com/hashicorp/design-system)).

**If for any reasons you need to stay on an older version**, you can:
- use the package version `0.6.4` to stay "frozen in time" at the moment in which the "maintained sunsetting" phase has started.
- use the package version `1.x.x` to stay on a release path that sees only minor patches but not components removal
  - in this case, if you need to make changes, use the branch `master-version-1.x` and release to NPM from that branch

---

*Old introduction to the project, left for reference:*

> Pds stands for Product Design System.  The original intent was to rename `structure` to Pds because the developer at the time thought it was more clear.  Unfortunately, that renaming never happened so there are two names.
> This is a mono repo with the idea that the Ember, React, etc projects scattered around Hashi could all eventually rely on a single source for design components.  Currently there is only `pds-ember`.

## Getting started
To contribute to the `pds-ember` package (currently the only package in this mono repo) please see the [Contributing](packages/pds-ember/CONTRIBUTING.md) guide for details.

## Creating + Consuming a release

### Update version
1. `yarn workspace @hashicorp/pds-ember version patch` to bump the version by a "patch" increment (see [Semantic Versioning](https://semver.org/))
2. Git add the yml file and the version update generated by the command.
3. Create a new PR for this and get it approved and merged into main.
4. Checkout main branch, pull down the new changes.

### Update Git version
1. Use `git tag [PACKAGE-NAME]-[VERSION]` e.g. `git tag pds-ember-2.0.2`
2. `git push --tags`

### Create new release in GitHub
1. Go to https://github.com/hashicorp/structure/tags
2. Select the tag just pushed in Git and from the submenu select "Create release"
3. Use `pds-ember-[VERSION]` as release title
4. Save (the `description` field will be automatically filled by GitHub)

### Update NPM
1. Make sure your NPM account has been added to the Hashi group (check with IT)
2. `yarn workspace @hashicorp/pds-ember npm publish`

Troubleshooting: If you get authentication errors from npm publish, you might have to do a login via workspace, before calling `npm publish`:
1. `yarn workspace @hashicorp/pds-ember npm login`
In this case you will need to do a two-factors authentication (2FA) on NPM before the login (via npmjs website)

### Consuming the updated version
1. In the repo consuming update `package.json` to use the new version of the structure package.  If it's in another mono repo with multiple packages, replace the version in each package to the new version (find/replace).
2. Run ‘yarn’ on base level of the repo to update all of them.
3. Add package changes and yarn lock file.
4. Open a pr!

#### 🚨 Which version to use? 🚨
The current version of this package is the one used for the "managed sunsetting" of the library from our products. As such, in time some components are deprecated and then removed from the repository, and some surgical patches to the code are done when necessary to facilitate the migration to the new UI library ([HashiCorp Design System components](https://github.com/hashicorp/design-system)).

**If for any reasons you need to stay on an older version**, you can:
- use the package version `0.6.4` to stay "frozen in time" at the moment in which the "maintained sunsetting" phase has started.
- use the package version `1.x.x` to stay on a release path that sees only minor patches but not components removal
  - in this case, if you need to make changes, use the branch `master-version-1.x` and release to NPM from that branch
  
## Deprecating and removing a component
 
To remove a component (eg. `Pds::Xyz`) from the Structure repository the steps to follow are more or less these.
- **first of all make sure it's not used anymore**:
  - search for `<Pds::Xyz` in the Cloud UI codebase (you should expect zero occurrencies)
    - if you find a limited number of occurrencies (eg. 1-3) consider if it would make sense to migrate the `Pds::Xyz` code and logic directly where it's consumed in Cloud UI and remove the component from Structure
  - search for `<Pds::Xyz` in the Structure codebase (you should expect zero occurrencies as well)
      - if you find a limited number of occurrencies (eg. 1-3) consider if it would make sense to embed the `Pds::Xyz` code and logic directly where it's consumed in Structure and don't expose it as component
- **delete all the code related to the `Pds::Xyz` component**, once you have decided it's OK to remove the component:
  - you can search for all the files related to the `Pds::Xyz` component as you would normally do in your IDE/editor
  - or you can use this PR to have a general idea of what needs to be removed: https://github.com/hashicorp/structure/pull/118
  - in both cases these are more or less the steps to follow:
    - remove all the files in `packages/pds-ember/addon/components/pds/xyz`
    - remove all the files in `packages/pds-ember/app/components/pds/xyz`
    - remove all the files in `packages/pds-ember/app/styles/pds/components/xyz`
      - remember to remove the imports from `packages/pds-ember/app/styles/pds/components/index.scss`
      - check if other components are importing any of the Sass definitions for `xyz` via `@use`, in which case copy the definitions where they're used or abstract them somewhere
    - remove all the files in `packages/pds-ember/tests/integration/components/xyz`
    - now search the entire codebase for `xyz` (case insensitive) and look what needs to be done for every remaining occurrence (it will depend case by case)
    - add a markdown file `packages/pds-ember/docs/deprecated/pds-xyz.stories.mdx` explaining what to do with this component (use the files in the same folder as guidance of what to write)
      - run `yarn build-storybook` and then `yarn storybook` to check that the page just created works correctly (and there are no crashes in the app because of missing components or references)
- **test the changes in Cloud UI**:
  - go in the root of the https://github.com/hashicorp/cloud-ui/
  - pull the latest version of the `main` branch (or the branch you're working on, if this work in Structure is related to it)
  - in the project root:
    - run `yarn` to install all the needed dependencies
    - `cd` in `node_modules/@hashicorp`
    - remove the `pds-ember` folder
    - create a symlink between your local version of Structure (the one that you're working on, with the component(s) removed) and the one consumed by Cloud UI using the command `ln -s [path-to-your-local-structure-project-folder]/packages/pds-ember [path-to-your-local-cloud-ui-project-folder]/node_modules/@hashicorp/.`
      - don't forget, once you've finished testing, to remove the symlink and re-run `yarn` to install properly all the dependencies
  - run the HCP/Cloud UI application and check that everything is OK
    - notice: while doing some tests we noticed that the header of the application is not rendered correctly, for some reasons; but it's OK, the app works anyway, maybe some issues with the fact that the package is actually a symlink 
- **open a new PR to get the changes approved**
  - once you are OK with the changes and you have pushed them in your development branch, open a new PR in this repo (if you want you can use this PR as model: https://github.com/hashicorp/structure/pull/118)
  - when the changes are approved and merged, follow the instructions above on how to release a new version of Structure
  - and finally, once the package is available on NPM, you can open a PR in Cloud UI to bump the version of the Structure `@hashicorp/pds-ember` dependency
