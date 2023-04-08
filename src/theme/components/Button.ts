// @ts-nocheck
import { defineStyleConfig } from '@chakra-ui/react';

const Button = defineStyleConfig({
	variants: {
		ghost: {
			borderRadius: 'base',
			backgroundColor: 'transparent',
			color: 'blackAlpha.600',
			padding: '0px',
			_hover: {
				backgroundColor: 'gray.400',
			},
			_disabled: {
				opacity: '0.5',
				backgroundColor: 'transparent',
			}
		},
		square: {
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
		squareImage: {
			borderRadius: 'base',
			overflow: 'hidden',
			borderColor: 'transparent',
			padding: '0px',
		    backgroundSize: 'cover',
		    backgroundPosition: 'center center',
		    backgroundRepeat: 'no-repeat',
		},		
		square2: {
			borderRadius: 'xl',
			border: '1px solid',
			overflow: 'hidden',
			padding: '0px',
			color: 'white',
			borderColor: 'transparent',
			backgroundColor: 'gray.200',
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
		primary: {
			borderRadius: 'base',
			backgroundColor: 'blue.600',
			color: 'blackAlpha.900',
			_hover: {
				color: 'blackAlpha.600',
			}
		},
		outline: {
			border: '1px solid',
			borderColor: 'gray.200',
			backgroundColor: 'white.200',
			padding: '4px 8px',
			color: 'blackAlpha.900',
			textTransform: 'uppercase', 
			fontWeight: '400',
			fontSize: '0.875rem',
			minWidth: '32px',
			minHeight: '32px',
			width: '100%',
			height: '100%',
			_hover: {
				backgroundColor: 'white.300'
			},
			_active: {
				borderColor: 'white.600',
				color: 'white.600'
			}
		},
		outlineX2: {
			border: '1px solid',
			borderColor: 'gray.200',
			backgroundColor: 'white.200',
			padding: '4px 8px',
			color: 'blackAlpha.900',
			fontWeight: '400',
			fontSize: '0.875rem',
			minWidth: '32px',
			minHeight: '32px',
			width: '100%',
			height: '100%',
			_hover: {
				backgroundColor: 'white.300'
			},
			_active: {
				borderColor: 'white.600',
				color: 'white.600'
			}
		},		
		outlineFree: {
			border: '1px solid',
			borderColor: 'gray.200',
			backgroundColor: 'white.200',
			padding: '4px 8px',
			color: 'blackAlpha.900',
			fontWeight: '400',
			_hover: {
				backgroundColor: 'white.300'
			},
			_active: {
				borderColor: 'white.600',
				color: 'white.600'
			}
		},
		outlineLight: {
			border: '1px solid',
			borderColor: 'gray.200',
			backgroundColor: 'transparent',
			padding: '4px 8px',
			color: 'blackAlpha.900',
			textTransform: 'uppercase', 
			fontWeight: '400',
			fontSize: '0.875rem',
			minWidth: '32px',
			minHeight: '32px',
			width: '100%',
			height: '100%',
			_hover: {
				backgroundColor: 'white.300'
			},
			_active: {
				borderColor: 'white.600',
				color: 'white.600'
			}
		},
		lite: {
			borderWidth: '0px',
			backgroundColor: 'transparent',
			color: 'blackAlpha.900', 
			fontWeight: '400',
			fontSize: '0.875rem',
			minWidth: '0px',
			minHeight: '0px',
			_hover: {
				backgroundColor: 'grayAlpha.100'
			},
			_dark: {
				_hover: {
					backgroundColor: 'whiteAlpha.8'
				},				
			}
		},
		defaultProps: {
			variant: 'ghost'
		}
	}
});

export { Button };