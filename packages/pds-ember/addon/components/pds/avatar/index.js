import Component from '@glimmer/component'

/**
 * @class PdsAvatar
 */

/**
 * Value for the `[src]` attribute of an `<img>` element.
 * If left blank, a fallback icon is displayed.
 *
 * @argument src
 * @type {string}
 */
export default class PdsAvatar extends Component {

  /**
   * Image Alt Text
   *
   * Defaults to `"user avatar"`, if left blank.
   *
   * @argument alt
   * @type {string}
   */
  get alt() {
    let { alt } = this.args
    return (alt ? alt : 'user avatar')
  }
}
