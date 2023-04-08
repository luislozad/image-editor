// @ts-nocheck
import { defineStyleConfig } from '@chakra-ui/react';

const Box = defineStyleConfig({
	variants: {
		effectHover: {
			borderRadius: 'base',
			border: '1px solid',
			overflow: 'hidden',
			padding: '0px',
			borderColor: 'transparent',
			backgroundColor: 'gray.200',
			color: 'text',
			_hover: {
				backgroundColor: 'gray.400'
			},
			_dark: {
				backgroundColor: 'gray.800',
				_hover: {
					backgroundColor: 'gray.600',
				}
			},
			_focus: {
				backgroundColor: 'blueAplha.200',
				borderColor: 'blue.600',
			}		
		},
		defaultProps: {
			variant: 'effectHover'
		}
	}
});

export { Box };