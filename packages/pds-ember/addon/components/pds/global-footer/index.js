import Component from '@glimmer/component';

/**
 * @class PdsGlobalFooter
 */
export default class PdsGlobalFooter extends Component {
  get year() {
    let d = new Date();
    let year = d.getFullYear();
    return year;
  }
}
