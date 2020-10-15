import { setJSONDoc } from '@storybook/addon-docs/ember';
import json from '../dist/storybook-docgen/index.json';

setJSONDoc(json);

let elBody = document.querySelector('body');
elBody.classList.add('pdsDocs');

export const parameters = {
  controls: {
    expanded: true
  },
  viewport: {
    viewports: {
      // smallest popular mobile screen size per
      // https://gs.statcounter.com/screen-resolution-stats/mobile/worldwide
      gsMobileSmall: {
        name: 'GS - Mobile (Small)',
        styles: {
          width: '360px',
          height: '640px',
        },
      },
      // largest popular mobile screen size per
      // https://gs.statcounter.com/screen-resolution-stats/mobile/worldwide
      gsMobileLarge: {
        name: 'GS - Mobile (Large)',
        styles: {
          width: '414px',
          height: '896px',
        },
      },

      // smallest tablet resolution per
      // https://gs.statcounter.com/screen-resolution-stats/tablet/worldwide
      gsTabletSmall: {
        name: 'GS - Tablet (SM)',
        styles: {
          width: '768px',
          height: '1024px',
        },
      },
      // largest tablet resolution per
      // https://gs.statcounter.com/screen-resolution-stats/tablet/worldwide
      gsTabletLarge: {
        name: 'GS - Tablet (LG)',
        styles: {
          width: '1280px',
          height: '800px',
        },
      },

      pdsSmall: {
        name: 'Custom - Small (SVGA)',
        styles: {
          width: '800px',
          height: '600px',
        },
      },
      pdsMedium: {
        name: 'Custom - Medium (HD)',
        styles: {
          width: '1360px',
          height: '768px',
        },
      },
      pdsLarge: {
        name: 'Custom - Large (FHD)',
        styles: {
          width: '1920px',
          height: '1080px',
        },
      },
    },
  },
}

/*
export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      // array of plain string values or MenuItem shape (see below)
      items: ['light', 'dark'],
    },
  },
}
*/
