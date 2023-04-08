// @ts-nocheck
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react';
import { inputAnatomy } from '@chakra-ui/anatomy';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(inputAnatomy.keys);

const search = definePartsStyle({
  field: {
    borderBottomWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'gray.200',
    borderRadius: '0px',
    padding: '0px',
    paddingBottom: '6px',
    fontSize: '0.8125rem',
    backgroundColor: 'transparent',
    _dark: {
    	borderColor: 'gray.700'
    },
    _hover: {
    	borderColor: 'blackAlpha.900',
    	_dark: {
    		borderColor: 'whiteAlpha.400',
    	}
    },
    _focus: {
    	borderColor: 'blackAlpha.900',
    	_dark: {
    		borderColor: 'whiteAlpha.400',
    	}
    }
  },
});

const inputTextCenter = definePartsStyle({
  field: {
    borderBottomWidth: '1px',
    textAlign: 'center',
    borderStyle: 'solid',
    borderColor: 'gray.200',
    borderRadius: '0px',
    padding: '0px',
    paddingBottom: '0px',
    fontSize: '0.8125rem',
    backgroundColor: 'transparent',
    _dark: {
      borderColor: 'gray.700'
    },
    _hover: {
      borderColor: 'blackAlpha.900',
      _dark: {
        borderColor: 'whiteAlpha.400',
      }
    },
    _focus: {
      borderColor: 'blackAlpha.900',
      _dark: {
        borderColor: 'whiteAlpha.400',
      }
    }
  },
});

const inputTextLeft = definePartsStyle({
  field: {
    borderBottomWidth: '1px',
    textAlign: 'left',
    borderStyle: 'solid',
    borderColor: 'gray.200',
    borderRadius: '0px',
    padding: '0px',
    paddingBottom: '0px',
    fontSize: '0.8125rem',
    backgroundColor: 'transparent',
    _dark: {
      borderColor: 'gray.700'
    },
    _hover: {
      borderColor: 'blackAlpha.900',
      _dark: {
        borderColor: 'whiteAlpha.400',
      }
    },
    _focus: {
      borderColor: 'blackAlpha.900',
      _dark: {
        borderColor: 'whiteAlpha.400',
      }
    }
  },
});

const Input = defineMultiStyleConfig({
  variants: { search, inputTextCenter, inputTextLeft },
});

export { Input };