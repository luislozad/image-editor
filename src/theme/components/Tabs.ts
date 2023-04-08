// @ts-nocheck
import { tabsAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(tabsAnatomy.keys);

const center = definePartsStyle({
	tablist: {
		justifyContent: 'center',
	}
})

// export the component theme
export const Tabs = defineMultiStyleConfig({ variants: { center } });