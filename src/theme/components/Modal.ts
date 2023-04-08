// @ts-nocheck
import { modalAnatomy as parts } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system'

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(parts.keys);

const min = definePartsStyle({
  dialogContainer: {
    justifyContent: 'flex-start',
  },
  dialog: {
    left: '450px'
  }
})

export const Modal = defineMultiStyleConfig({
  variants: { min }
})