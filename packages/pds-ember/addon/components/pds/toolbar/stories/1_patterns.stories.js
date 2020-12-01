import hbs from 'htmlbars-inline-precompile'
import DocsPage, { TITLE } from '../docs.mdx'

export default {
  title: `${TITLE} / Patterns`,
  component: 'PdsToolbar',
  parameters: { docs: { page: DocsPage } },
}

export const Lists = () => ({
  template: hbs`
    <Pds::Toolbar as |T|>
      <T.Start>
        <Pds::Input
          @type="search"
          id="filter"
          placeholder="Filter"
          aria-label="filter content"
        />
      </T.Start>

      <T.End>
        <a href="#" class="pds--cta pds--ghost pds--iconEnd">
          <span>Create Item</span>
          <Pds::Icon @type="plus-plain" />
        </a>
      </T.End>
    </Pds::Toolbar>
  `,
})
export const Details = () => ({
  template: hbs`
    <Pds::Toolbar as |T|>
      <T.End>
        <Pds::Dropdown @align="right" as |Drop|>
          <Drop.Trigger @variant="ghost">
            Versions
          </Drop.Trigger>
          <Drop.Dialog>
            <Docs::ContentSkeleton />
          </Drop.Dialog>
        </Pds::Dropdown>

        <T.Divider />

        <Pds::Dropdown @align="right" as |Drop|>
          <Drop.Trigger @variant="ghost">
            Delete Item
          </Drop.Trigger>
          <Drop.Dialog>
            <Docs::ContentSkeleton />
          </Drop.Dialog>
        </Pds::Dropdown>

        <a href="#" class="pds--cta pds--ghost pds--iconEnd">
          <span>Edit Item</span>
          <Pds::Icon @type="chevron-right" />
        </a>
      </T.End>
    </Pds::Toolbar>
  `,
})
export const Editor = () => ({
  template: hbs`
    <Pds::Toolbar as |T|>
      <T.Start>
        <T.Label>Label Text</T.Label>
      </T.Start>

      <T.End>
        <Pds::Select>
          <option>JSON</option>
        </Pds::Select>

        <T.Divider />

        <Pds::Button
          @variant="ghost"
          @iconStart="copy-action"
        />
      </T.End>
    </Pds::Toolbar>
  `,
})
