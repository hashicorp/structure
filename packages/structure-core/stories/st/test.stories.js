import hbs from 'htmlbars-inline-precompile';

export default {
  title: 'Structure | St::Test',
  component: 'StTest',
};

// add stories by adding more exported functions
export let StTest = () => ({
  template: hbs`<St::Test />`,
  context: {
    // add items to the component rendering context here
  }
});
