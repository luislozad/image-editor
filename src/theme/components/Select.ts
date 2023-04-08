// @ts-nocheck
import { selectAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(selectAnatomy.keys);

const lite = definePartsStyle({
  field: {
    borderBottomWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'gray.200',
    borderRadius: '0px',
    fontSize: '13px',
    padding: '0px',
    height: '1.8rem',
    _dark: {
      borderColor: 'gray.700'
    },
    _hover: {
      borderColor: 'blackAlpha.900',
      _dark: {
        borderColor: 'whiteAlpha.400',
      }
    },
  },
  icon: {
    right: '0px',
  }
});

const neutral = definePartsStyle({
  field: {
    fontSize: '13px',
    padding: '2px 10px',
    height: '30px',
    borderColor: 'gray.200',
    borderWidth: '1px',
    backgroundColor: 'white.200',
    cursor: 'pointer',
    _hover: {
      backgroundColor: 'white.300',
    },
  },
  icon: {
    paddingTop: '4px',
    right: '3px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export const Select = defineMultiStyleConfig({
  variants: { lite, neutral }
})