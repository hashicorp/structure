import Component from '@glimmer/component';

/**
 * @class DocsInput
 */

export default class extends Component {
  get type() {
    return this.args.type ?? 'text';
  }
}
