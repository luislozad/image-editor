// @ts-nocheck

import { Flex } from '@chakra-ui/react';
import { Category } from  './types';
import { 
	Library, 
	Transform,
	Filters,
	Adjust,
	Focus,
	Frames,
	Overlays,
	Text,
	TextDesign,
	Stickers,
	Brush,
} from '@views';

interface ContentProps {
	category: Category;
}

function Content(props: ContentProps) {
	const { category } = props;

	return (
		<Flex w='230px' h='100%' bg='content' direction='column' overflow='hidden'>
			{
				category === 'library' && <Library />
			}
			{
				category === 'transform' && <Transform />
			}
			{
				category === 'filters' && <Filters />
			}
			{
				category === 'adjust' && <Adjust />
			}
			{
				category === 'focus' && <Focus />
			}
			{
				category === 'frames' && <Frames />
			}
			{
				category === 'overlays' && <Overlays />
			}
			{
				category === 'text' && <Text />
			}
			{
				// category === 'textDesign' && <TextDesign />
			}
			{
				category === 'stickers' && <Stickers />
			}
			{
				category === 'brush' && <Brush />
			}
		</Flex>
	);
}

export { Content };