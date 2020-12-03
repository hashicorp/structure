import Component from '@glimmer/component'

/**
 * @class PdsCopyright
 */
export default class PdsCopyright extends Component {
  get year() {
    let d = new Date()
    let year = d.getFullYear()
    return year
  }
}
