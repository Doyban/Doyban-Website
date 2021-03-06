import { mount } from '@vue/test-utils'
import Logo from '@/components/Logo.vue'

// TODO: Add E2E tests.
describe('Logo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Logo)
    expect(wrapper.vm).toBeTruthy()
  })
})
