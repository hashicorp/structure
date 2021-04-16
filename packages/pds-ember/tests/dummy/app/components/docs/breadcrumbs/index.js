import Component from '@glimmer/component';

/**
 * @class DocsBreadcrumbs
 */
export default class DocsBreadcrumbs extends Component {
  get depths() {
    let { depth } = this.args;
    let output = [];
    for (let i = 1; i <= depth; i++) {
      output.push(`Level ${i}`);
    }
    return output;
  }
}
