import hbs from 'htmlbars-inline-precompile';
import ICONS from '@hashicorp/structure-icons/dist/index';
import DocsPage, { TITLE } from '../docs.mdx';
import { ICON_TYPES, DEFAULT_VARIANT } from '@hashicorp/pds-ember/addon/components/pds/modal/utils';

const VARIANTS = Object.keys(ICON_TYPES);

// [itemN] --> { itemN: itemN }
const listAsOptions = (options, item) => {
  options[item] = item;
  return options;
};
const ICON_OPTIONS = ICONS.reduce(listAsOptions, {});

export default {
  title: TITLE,
  component: 'PdsModal',
  parameters: { docs: { page: DocsPage } },
  argTypes: {
    onClose: { action: '@onClose' },
    variant: {
      defaultValue: DEFAULT_VARIANT,
      control: {
        type: 'radio',
        options: VARIANTS,
      },
    },
    icon: {
      defaultValue: '',
      control: {
        type: 'select',
        options: {
          '(automatic)': '',
          ...ICON_OPTIONS,
        },
      },
    },
  },
  args: {
    title: 'Modal Title',
  },
};

export const Index = (args) => ({
  template: hbs`
    <Pds::Modal
      @icon={{icon}}
      @onClose={{onClose}}
      @variant={{variant}}
      @title={{title}}
      as |M|
    >
      <M.Body>
        <p>
          After inspecting the CO2 swing arm water pump, we discovered that the
          steering knuckle of the pressure block heater isn't idling in the
          steering damper.
        </p>
      </M.Body>

      <M.Footer>
        <Pds::ButtonSet>
          <Pds::Button @variant="primary">Primary</Pds::Button>
          <Pds::Button>Secondary</Pds::Button>
        </Pds::ButtonSet>
      </M.Footer>
    </Pds::Modal>
  `,
  context: args,
});

export const LengthyContent = (args) => ({
  template: hbs`
    <Pds::Modal
      @icon={{icon}}
      @onClose={{onClose}}
      @variant={{variant}}
      @title={{title}}
      as |M|
    >
      <M.Body>
        <p>
          After inspecting the CO2 swing arm water pump, we discovered that the
          steering knuckle of the pressure block heater isn't idling in the
          steering damper.
        </p>

        <p>
          We fixed the anti-theft antenna alarm as a result of the fourth
          suspension starting like the CV joint. Your steering intermediate
          shaft service light isn't cranking properly in order to empty the
          retracted airbag through the AC condenser. After inspecting the
          elevated throttle linkage starter, we discovered that the traction
          control system of the cold-cranking transmission filter isn't
          extending over the sensor. Your exhaust gas recirculation valve choke
          linkage isn't charging properly in order to move the lazy shift
          linkage in the bulb.
        </p>

        <p>
          We need to replace the previous leaf spring charcoal canister because
          the worn emergency brake isn't hitting between the downshift cable.
          After inspecting the lazy tire pressure monitoring system emergency
          brake, we discovered that the parking brake of the previous emission
          system isn't leaking across the spark plug. We fixed the pressure
          throttle position sensor hose as a result of the current electronic
          stability control holding in front of the cylinder.
        </p>

        <p>
          After inspecting the OBD cap linkage, we discovered that the
          thermostatic expansion valve of the drained anti-lock braking system
          isn't deploying outside the bumper. Your brake system steering linkage
          isn't extending properly in order to slide the R12 brake drum across
          the head gasket. We fixed the idle carburetor firewall as a result of
          the O2 shift linkage draining above the belt. We fixed the extended
          cylinder horn as a result of the started injector moving on the engine.
        </p>

        <p>
          After inspecting the anti-theft filter electronic stability control,
          we discovered that the regenerative braking system of the snapped leaf
          spring isn't extending along the charcoal canister. Your alarm fuel
          filter isn't deploying properly in order to shake the first airbag off
          the rotor. Your exhaust gas recirculation valve transmission fluid
          isn't firing properly in order to empty the compressed timing belt
          past the starter. After inspecting the lubricated steering linkage
          timing belt, we discovered that the converter of the rear,
          passenger-side exhaust isn't idling with the transmission fluid.
        </p>

        <p>
          We fixed the diesel distributor cap tire pressure monitoring system
          as a result of the adjustable choke linkage pulling in the electronic
          stability control. The sensor oil filter should be oscillating above
          the third cap while the horn is shaking the full downshift cable. We
          fixed the diesel light air pump as a result of the front,
          passenger-side fuel pump flushing onto the crankcase ventilation. We
          fixed the locked AC condenser tank as a result of the lazy anti-lock
          braking system sliding inside the firewall. The lever crankcase
          ventilation should be turning outside the rear-wheel axle while the
          reservoir is sliding the front-wheel module.
        </p>
      </M.Body>

      <M.Footer>
        <Pds::ButtonSet>
          <Pds::Button @variant="primary">Primary</Pds::Button>
          <Pds::Button>Secondary</Pds::Button>
        </Pds::ButtonSet>
      </M.Footer>
    </Pds::Modal>
  `,
  context: args,
});

export const EmptyModal = (args) => ({
  template: hbs`
    <Pds::Modal
      @icon={{icon}}
      @onClose={{onClose}}
      @variant={{variant}}
      @title={{title}}
    />
  `,
  context: args,
});
