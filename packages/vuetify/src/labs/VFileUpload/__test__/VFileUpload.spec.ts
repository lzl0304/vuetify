import { VFileUpload } from '../VFileUpload'

// Utilities
import { describe, expect, it } from '@jest/globals'
import { mount } from '@vue/test-utils'
import { createVuetify } from '@/framework'

describe('VFileUpload', () => {
  const vuetify = createVuetify()

  function mountFunction (component: any, options = {}) {
    return mount(component, {
      global: {
        plugins: [vuetify],
      },
      ...options,
    })
  }

  it('should exist', () => {
    const wrapper = mountFunction(
      <VFileUpload />,
    )
    expect(wrapper.html()).toMatchSnapshot()
  })
})
