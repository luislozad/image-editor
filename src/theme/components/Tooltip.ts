// @ts-nocheck
import { defineStyleConfig } from '@chakra-ui/react';

const Tooltip = defineStyleConfig({
	variants: {
		x1: {
			py: '3',
			px: '3',
			color: 'blackAlpha.900',
			fontWeight: '400',
			fontSize: '0.8125rem'
		},
		defaultProps: {
			variant: 'x1'
		}
	}
});

export { Tooltip };