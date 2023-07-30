import { mount } from '@vue/test-utils';
import Page from '../pages/index.vue';

const stubComponents = {
  stubs: {
    bFormInput: {
      template: '<input/>',
    },
  },
};
describe('index page', () => {
  it('mount input', () => {
    const btInput = mount(Page, {
      global: {
        ...stubComponents,
      },
    });

    expect(btInput).toBeDefined();
  });
});
