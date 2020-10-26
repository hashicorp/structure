import hbs from 'htmlbars-inline-precompile'
import DocsPage, { TITLE } from '../docs.mdx'

export default {
  title: TITLE,
  component: 'PdsLoading',
  // ArgsTable will have tabbed nav to view args for each subcomponent
  subcomponents: {
    'L.Elapsed': 'PdsLoadingElapsed',
    'L.Header': 'PdsLoadingHeader',
    'L.Message': 'PdsLoadingMessage',
  },
  parameters: { docs: { page: DocsPage } },
}

export const Index = () => ({
  template: hbs`
    <Pds::Loading as |L|>
      <L.Elapsed />
      <L.Header>
        Header Content
      </L.Header>
      <L.Message>
        Message Content -
        We must thoughtfully adapt the monthly MVP flow! A simple voice of the
        customer always takes less time than a fail-fast one. As a user, I
        should be able to detail the patch-level sprint review so that I can
        burn out the flexible MVP customers past the predictable story points.
      </L.Message>
    </Pds::Loading>
  `,
})

export const Elapsed = () => ({
  template: hbs`
    <Pds::Loading::Elapsed />
  `,
})

export const Header = () => ({
  template: hbs`
    <Pds::Loading::Header>
      Header Content
    </Pds::Loading::Header>
  `,
})

export const Message = () => ({
  template: hbs`
    <Pds::Loading::Message>
      Message Content
    </Pds::Loading::Message>
  `,
})
