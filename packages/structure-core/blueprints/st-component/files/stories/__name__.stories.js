import hbs from 'htmlbars-inline-precompile';

export default {
  title: 'Structure | <%= angleBracketInvocation %>',
  component: '<%= classifiedModuleName %>',
};

// add stories by adding more exported functions
export let <%= classifiedModuleName %> = () => ({
  template: hbs`<<%= angleBracketInvocation %> />`,
  context: {
    // add items to render the component here
  }
});
