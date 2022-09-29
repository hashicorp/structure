import hbs from 'htmlbars-inline-precompile';
import { withKnobs, number, select } from '@storybook/addon-knobs';
import placement from '../placement';
import DocsPage, { TITLE } from '../docs.mdx';

const CONFIG = {
  title: TITLE,
  decorators: [withKnobs],
  parameters: { docs: { page: DocsPage } },
};

const Default = () => ({
  template: hbs`
      <p style="text-align:center; padding: 40px;">
        <FlightIcon
          @name='lock-fill'
          {{tooltip 'This peering connection is locked due to a dependency. ' options=(hash placement=tippyPlacement showOnCreate=tippyShowOnCreate offset=(array tippySkidding tippyDistance))}}
        />
      </p>
  `,
  context: {
    tippyShowOnCreate: select('showOnCreate', [true, false], true),
    tippyPlacement: select('placement', placement, 'top'),
    tippySkidding: number('skidding (default is 0)', 0),
    tippyDistance: number('distance (default is 10)', 10),
  },
});

export { CONFIG as default, Default };
