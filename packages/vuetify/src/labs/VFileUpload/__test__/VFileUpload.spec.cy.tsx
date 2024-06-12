/// <reference types="../../../../types/cypress" />

import { VFileUpload } from '..'

// Tests
describe('VAlert', () => {
  describe('color', () => {
    it('supports default color props', () => {
      cy.mount(() => (
        <>
          <VFileUpload />
        </>
      ))
        .get('.v-file-upload')
    })
  })
})
