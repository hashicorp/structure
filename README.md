# Structure

Pds stands for Product Design System.  The original intent was to rename `structure` to Pds because the developer at the time thought it was more clear.  Unfortunately, that renaming never happened so there are two names.

This is a mono repo with the idea that the Ember, React, etc projects scattered around Hashi could all eventually rely on a single source for design components.  Currently there is only `pds-ember`.

## Getting Started
To contribute to the `pds-ember` package (currently the only package in this mono repo) please see the [Contributing](packages/pds-ember/CONTRIBUTING.md) guide for details.


## Creating + Consuming a Release

### Update Version
1. `yarn workspace @hashicorp/pds-ember version patch` to bump the version by `0.0.1`
1. Git add the yml file and the version update generated by the command.
1. Create a new PR for this and get it approved and merged into main.
1. Checkout main branch, pull down the new changes.

### Update Git Version
1. Use `git tag [PACKAGE-NAME]-[VERSION]` e.g. `git tag pds-ember-0.5.2`
1. `git push --tags`

### Update NPM
1. Make sure your NPM account has been added to the Hashi group (check with IT)
1. `yarn workspace @hashicorp/[PACKAGE-NAME] npm publish` for example `yarn workspace @hashicorp/pds-ember npm publish`

Troubleshooting: If you get authentication errors from npm publish:
1. `npm login` before `npm publish`
1. Need 2FA on NPM before the login (via npmjs website)
1. Might have to do a login via workspace, for example: `yarn workspace @hashicorp/pds-ember npm login`

### Consuming the Updated Version
1. In the repo consuming update `package.json` to use the new version of the structure package.  If it's in another mono repo with multiple packages, replace the version in each package to the new version (find/replace).
1. Run ‘yarn’ on base level of the repo to update all of them.
1. Add package changes and yarn lock file.
1. Open a pr!
