import hbs from 'htmlbars-inline-precompile';
import { withKnobs, number, select } from "@storybook/addon-knobs";
import placement from "../placement";
import types from "@hashicorp/structure-icons/dist/index";
import DocsPage, { TITLE } from '../docs.mdx';
import { themes } from "@storybook/theming";


const CONFIG = {
  title: TITLE,
  decorators: [withKnobs],
  parameters: { docs: { page: DocsPage } },
};

const Default = () => ({
  template: hbs`
    <table class='pdsTable'>
        <caption>
          Route List
        </caption>
        <thead>
          <tr>
            <th>
              ID
            </th>
            <th>
              Destination
            </th>
            <th>
              Target
            </th>
            <th>
              Status
            </th>
            <th>
              Target type
            </th>
            <th>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>peering-test-route-2	</td>
            <td>10.0.24.55</td>
            <td>
              peering-test
              <Pds::Icon
                @type='lock-closed-fill'
                {{tooltip 'This peering connection is locked due to a dependency. ' options=(hash placement=tippyPlacement showOnCreate=tippyShowOnCreate offset=(array tippySkidding tippyDistance))}}
              />
            </td>
            <td>
              Active
            </td>
            <td>Peering connection</td>
            <td></td>
          </tr>
        </tbody>
      </table>
  `,
  context: {
    tippyShowOnCreate: select("showOnCreate", [true, false], true),
    tippyPlacement: select("placement", placement, "top"),
    tippySkidding: number("skidding (default is 0)", 0),
    tippyDistance: number("distance (default is 10)", 10),
  },
});

export {
  CONFIG as default,
  Default,
}