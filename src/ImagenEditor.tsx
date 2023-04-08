import { useState } from 'react';
import { Window, Viewport, Toolbar, Content } from '@components';
import { Category } from '@components/types';
import { Grid, GridItem } from '@chakra-ui/react';

function ImagenEditor() {
	const [category, setCategory] = useState<Category>('library');

	return (
	    <Window>
	    	<Grid 
	    		h='100%'
	    		w='100%'
	    		templateColumns='max-content max-content 1fr' 
	    		templateRows='1fr'
	    	>
	    		<GridItem colStart={1} colEnd={2} rowSpan={1}>
	    			<Toolbar onCategory={(category) => setCategory(category)} />
	    		</GridItem>
	    		<GridItem colStart={2} colEnd={3}  rowSpan={1} overflow='hidden auto'>
	    			<Content category={category} />
	    		</GridItem>
	    		<GridItem colStart={3} colEnd={4} rowSpan={1}>
	    			<Viewport />	    			
	    		</GridItem>
	    	</Grid>
	    </Window>		
	);
}

export { ImagenEditor };