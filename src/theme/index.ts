// @ts-nocheck
import { extendTheme } from '@chakra-ui/react';
import { Button } from './components/Button';
import { Tooltip } from './components/Tooltip';
import { Divider } from './components/Divider';
import { Input } from './components/Input';
import { Box } from './components/Box';
import { Select } from './components/Select';
import { Modal } from './components/Modal';
import { Tabs } from './components/Tabs';

const theme = extendTheme({
	semanticTokens: {
		colors: {
			viewport: {
				default: 'white.100',
				_dark: 'black.200',
			},
			content: {
				default: 'gray.100',
				_dark: 'black.100',
			},
			explorer: {
				default: 'gray.100',
				_dark: 'black.100',
			},
			toolbar: {
				default: 'gray.200',
				_dark: 'gray.800',
			},
			title: {
				default: 'blackAlpha.600',
				_dark: 'whiteAlpha.600',
			},
			primary: 'blue.600',
			window: 'black.100',
			text: {
				default: 'blackAlpha.900',
				_dark: 'whiteAlpha.900',
			},
			divider: {
				default: 'gray.200',
				_dark: 'gray.700'
			},
			folderText: {
				default: 'whiteAlpha.800',
				_dark: 'whiteAlpha.900'				
			}
		}
	},
	colors: {
		white: {
			100: '#fbfbfb',
			200: '#e6e6e6',
			300: '#d9d9d9',
		},
		whiteAlpha: {
			8: 'rgba(255, 255, 255, 0.08)',
			400: 'rgba(255, 255, 255, 0.4)',
			600: 'rgba(255, 255, 255, 0.6)',
			800: 'rgba(255, 255, 255, 0.87)',
			900: 'rgba(255, 255, 255, 0.9)'
		},
		gray: {
			100: '#eeeeee',
			200: '#d4d4d4',
			300: '#CCCCCC',
			400: '#c9c9c9',
			500: '#8c8c8c',
			600: '#434343',
			700: '#323232',
			800: '#333333',
			900: '#242424',
		},
		grayAlpha: {
			100: 'rgba(125, 125, 125, 0.12)',
		},
		blackAlpha: {
			300: 'rgba(0, 0, 0, 0.38)',
			600: 'rgba(0, 0, 0, 0.6)',
			900: 'rgba(0, 0, 0, 0.9)'
		},
		blue: {
			600: '#1e47fb'
		},
		blueAplha: {
			200: 'rgba(30, 71, 251, 0.2)',
		},
		black: {
			100: '#161617',
			200: '#0b0b0b',
			900: '#000000',
		}
	},
	fonts: {
		body: `'Fira Sans', sans-serif`,
	},
	components: {
		// Container: containerTheme,
		Button,
		Tooltip,
		Divider,
		Input,
		Box,
		Select,
		Modal,
		Tabs,
	},
});

export { theme };