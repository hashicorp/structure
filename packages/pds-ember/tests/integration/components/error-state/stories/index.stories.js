import hbs from 'htmlbars-inline-precompile'
import ICONS from '@hashicorp/structure-icons/dist/index';
import DocsPage, { TITLE } from '../docs.mdx'

export default {
  title: TITLE,
  component: 'PdsErrorState',
  parameters: { docs: { page: DocsPage } },
}

export const Index = (args) => ({
  template: hbs`
    <Pds::ErrorState
      @title={{title}}
      @subtitle={{subtitle}}
      @icon={{icon}}
      as |E|
    >
      <E.Body>{{body}}</E.Body>
      <E.Footer>
        <a href="#">
          <Pds::Icon @type="chevron-left" />
          Go Back
        </a>

        <a href="#" class="pds--incognito">
          Need Help?
        </a>
      </E.Footer>
    </Pds::ErrorState>
  `,
  context: args,
})
Index.argTypes = {
  icon: {
    control: {
      type: 'select',
      options: ICONS,
    }
  },
}
Index.args = {
  title: 'Error Title',
  subtitle: 'Subtitle',
  body: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Maecenas non orci odio.',
    'Pellentesque condimentum malesuada orci, quis porttitor nibh auctor quis.'
  ].join(' '),
}

export const HTTP403 = () => ({
  template: hbs`
    <Pds::ErrorState
      @title="You are not authorized"
      @subtitle="Error 403"
      @icon="disabled"
      as |E|
    >
      <E.Body>
        You must be granted permissions to view this data.
        Ask your administrator if you think you should have access.
      </E.Body>

      <E.Footer>
        <a href="#">
          <Pds::Icon @type="chevron-left" />
          Go Back
        </a>

        <a href="#" class="pds--incognito">
          Need Help?
        </a>
      </E.Footer>
    </Pds::ErrorState>
  `,
})

export const HTTP404 = () => ({
  template: hbs`
    <Pds::ErrorState
      @title="Page not found"
      @subtitle="Error 404"
      @icon="help-circle-outline"
      as |E|
    >
      <E.Body>
        Sorry, we couldn't find the page you were looking for.
        You can go back or to one of the links below.
      </E.Body>

      <E.Footer>
        <a href="#">
          <Pds::Icon @type="chevron-left" />
          Go Back
        </a>

        <a href="#" class="pds--incognito">
          Need Help?
        </a>
      </E.Footer>
    </Pds::ErrorState>
  `,
})

export const HTTP500 = () => ({
  template: hbs`
    <Pds::ErrorState
      @title="Something went wrong"
      @subtitle="Error 500"
      @icon="alert-circle-outline"
      as |E|
    >
      <E.Body>
        We ran into a problem and could not continue. You can ask your
        administrator or try again later.
      </E.Body>

      <E.Footer>
        <a href="#">
          <Pds::Icon @type="refresh-default" />
          Try Again
        </a>

        <a href="#" class="pds--incognito">
          Need Help?
        </a>
      </E.Footer>
    </Pds::ErrorState>
  `,
})
