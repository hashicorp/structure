import { setJSONDoc } from '@storybook/addon-docs/ember';
import json from '../dist/storybook-docgen/index.json';

setJSONDoc(json);

let elBody = document.querySelector('body');
elBody.classList.add('pdsDocs');
