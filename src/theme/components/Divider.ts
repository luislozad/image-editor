// @ts-nocheck
import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const base = defineStyle({
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'gray.200',
    _dark: {
    	borderColor: 'gray.700'
    }
});

const xl = defineStyle({
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: 'gray.200',
    _dark: {
    	borderColor: 'gray.700'
    }    
});

const Divider = defineStyleConfig({
    variants: { base, xl },
});

export { Divider };