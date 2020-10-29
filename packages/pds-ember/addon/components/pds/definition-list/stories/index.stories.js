import hbs from 'htmlbars-inline-precompile'
import DocsPage, { TITLE } from '../docs.mdx'

export default {
  title: TITLE,
  component: 'PdsDefinitionList',
  subcomponents: {
    'List.Key': 'PdsDefinitionListKey',
    'List.Value': 'PdsDefinitionListValue',
  },
  parameters: { docs: { page: DocsPage } },
}

export const Index = (args) => ({
  template: hbs`
    <Pds::DefinitionList
      @stacked={{stacked}}
      as |List|
    >
      <List.Key>Short Key</List.Key>
      <List.Value>Short Value</List.Value>

      <List.Key>Short Key</List.Key>
      <List.Value>
        Long Value -
        If we close past the items, we can get the many pattern underneath the
        PR product. If we build about the sprints, we can get the marketable
        work in progress about the PR work in progress. It was discovered that
        by rarely getting the WIP customers, we can spike the flexible WIP
        definition of done beside the pair wiki. We must finally practice the
        maintainable MVP automation! A simple sprint backlog always takes less
        time than a steady one. Given backlog sequences, finally selecting the
        pirate release planning beneath the weekly epic will finally open the
        predictable size.
      </List.Value>

      <List.Key>
        Long Key -
        As a user, I should be able to prevent the visible test so that I can
        commit the adaptive XP customers beside the parallel customers.
      </List.Key>
      <List.Value>
        Short Value
      </List.Value>

      <List.Key>
        Long Key -
        As a user, I should be able to prevent the visible test so that I can
        commit the adaptive XP customers beside the parallel customers.
      </List.Key>
      <List.Value>
        Long Value -
        If we close past the items, we can get the many pattern underneath the
        PR product. If we build about the sprints, we can get the marketable
        work in progress about the PR work in progress. It was discovered that
        by rarely getting the WIP customers, we can spike the flexible WIP
        definition of done beside the pair wiki. We must finally practice the
        maintainable MVP automation! A simple sprint backlog always takes less
        time than a steady one. Given backlog sequences, finally selecting the
        pirate release planning beneath the weekly epic will finally open the
        predictable size.
      </List.Value>
    </Pds::DefinitionList>
  `,
  context: args,
})
Index.args = {
  stacked: false,
}
