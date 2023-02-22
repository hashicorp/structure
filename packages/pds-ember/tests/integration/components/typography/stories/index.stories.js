/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import hbs from 'htmlbars-inline-precompile';
import DocsPage, { TITLE } from './docs.mdx';

const CONFIG = {
  title: TITLE,
  parameters: { docs: { page: DocsPage } },
};

const Index = () => ({
  template: hbs`
    <section>
      <header>
        <h1 class="pds-heading pds--0">Heading 0</h1>
        <p class="pds--body-lg">
          H0 Section Description:
          The quick brown fox jumps over the lazy dog.
        </p>
      </header>
      <p>
        H0 Section Copy:
        As a user, I should be able to block the business lifecycle management
        so that I can prevent the predictable WIP features over the many
        impediments. It was discovered that by efficiently building the WIP
        metrics, we can refactor the sustainable MVP code smell across the
        sustainable lifecycle management. We must perfectly inspect the minimum
        PR technical debt! As a user, I should be able to detail the lean voice
        of the customer so that I can document the aggressive VOC bottlenecks
        behind the domain customers.  Try to document the many velocity, maybe
        it will help get the XP stakeholders.
      </p>
    </section>

    <section>
      <header>
        <h2 class="pds-heading pds--1">Heading 1</h2>
        <p class="pds--body-lg">
          H1 Section Description:
          The quick brown fox jumps over the lazy dog.
        </p>
      </header>

      <p>
        H1 Section Copy:
        As a user, I should be able to block the business lifecycle management
        so that I can prevent the predictable WIP features over the many
        impediments. It was discovered that by efficiently building the WIP
        metrics, we can refactor the sustainable MVP code smell across the
        sustainable lifecycle management. We must perfectly inspect the minimum
        PR technical debt! As a user, I should be able to detail the lean voice
        of the customer so that I can document the aggressive VOC bottlenecks
        behind the domain customers.  Try to document the many velocity, maybe
        it will help get the XP stakeholders.
      </p>
    </section>

    <section>
      <header>
        <h3 class="pds-heading pds--2">Heading 2</h3>
        <p>
          H2 Section Description:
          The quick brown fox jumps over the lazy dog.
        </p>
      </header>

      <p>
        H2 Section Copy:
        As a user, I should be able to block the business lifecycle management
        so that I can prevent the predictable WIP features over the many
        impediments. It was discovered that by efficiently building the WIP
        metrics, we can refactor the sustainable MVP code smell across the
        sustainable lifecycle management. We must perfectly inspect the minimum
        PR technical debt! As a user, I should be able to detail the lean voice
        of the customer so that I can document the aggressive VOC bottlenecks
        behind the domain customers.  Try to document the many velocity, maybe
        it will help get the XP stakeholders.
      </p>
    </section>

    <section>
      <header>
        <h4 class="pds-heading pds--3">Heading 3</h4>
        <p class="pds--body-sm">
          H3 Section Description:
          The quick brown fox jumps over the lazy dog.
        </p>
      </header>

      <p>
        H3 Section Copy:
        As a user, I should be able to block the business lifecycle management
        so that I can prevent the predictable WIP features over the many
        impediments. It was discovered that by efficiently building the WIP
        metrics, we can refactor the sustainable MVP code smell across the
        sustainable lifecycle management. We must perfectly inspect the minimum
        PR technical debt! As a user, I should be able to detail the lean voice
        of the customer so that I can document the aggressive VOC bottlenecks
        behind the domain customers.  Try to document the many velocity, maybe
        it will help get the XP stakeholders.
      </p>
    </section>

    <section>
      <header>
        <h5 class="pds-heading pds--4">Heading 4</h5>
        <p class="pds--body-sm">
          H4 Section Description:
          The quick brown fox jumps over the lazy dog.
        </p>
      </header>

      <p>
        H4 Section Copy:
        As a user, I should be able to block the business lifecycle management
        so that I can prevent the predictable WIP features over the many
        impediments. It was discovered that by efficiently building the WIP
        metrics, we can refactor the sustainable MVP code smell across the
        sustainable lifecycle management. We must perfectly inspect the minimum
        PR technical debt! As a user, I should be able to detail the lean voice
        of the customer so that I can document the aggressive VOC bottlenecks
        behind the domain customers.  Try to document the many velocity, maybe
        it will help get the XP stakeholders.
      </p>
    </section>
  `,
});

const Fonts = () => ({
  template: hbs`
    {{#each (array 'sans-serif' 'monospace') as |family|}}
      {{#each (array 100 200 300 400 500 600 700 800 900) as |weight|}}
        <p class="docs-font {{family}} weight-{{weight}}">
          {{weight}}: {{family}}
        </p>
      {{/each}}
      <br />
    {{/each}}
  `,
});

const SectionHeaders = () => ({
  template: hbs`
    <section>
      <header>
        <h1 class="pds-heading pds--0">Heading 0</h1>
        <p class="pds--body-lg">
          The quick brown fox jumps over the lazy dog.
        </p>
      </header>
    </section>

    <section>
      <header>
        <h2 class="pds-heading pds--1">Heading 1</h2>
        <p class="pds--body-lg">
          The quick brown fox jumps over the lazy dog.
        </p>
      </header>
    </section>

    <section>
      <header>
        <h3 class="pds-heading pds--2">Heading 2</h3>
        <p>
          The quick brown fox jumps over the lazy dog.
        </p>
      </header>
    </section>

    <section>
      <header>
        <h4 class="pds-heading pds--3">Heading 3</h4>
        <p class="pds--body-sm">
          The quick brown fox jumps over the lazy dog.
        </p>
      </header>
    </section>

    <section>
      <header>
        <h5 class="pds-heading pds--4">Heading 4</h5>
        <p class="pds--body-sm">
          The quick brown fox jumps over the lazy dog.
        </p>
      </header>
    </section>
  `,
});

const InlineCode = () => ({
  template: hbs`
    <p>
      Configuration for the tool can be defined at
      <code>~/.dotdir/path/to/config/file</code>.
      <br />
      <a href="#">Read more about <code>$PATH</code> in the docs.</a>
    </p>
  `,
});

const Headings = () => ({
  template: hbs`
    <h2 class="pds-heading pds--0">Heading 0</h2>
    <h2 class="pds-heading pds--1">Heading 1</h2>
    <h2 class="pds-heading pds--2">Heading 2</h2>
    <h2 class="pds-heading pds--3">Heading 3</h2>
    <h2 class="pds-heading pds--4">Heading 4</h2>
  `,
});

export {
  CONFIG as default,
  Index,
  Fonts,
  Headings,
  InlineCode,
  SectionHeaders,
};
