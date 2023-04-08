import { memo } from 'react';
import { Details } from '@components';
import { Title, Spacer } from '@ui';
import { 
	Alignment, 
	Content, 
	Fonts, 
	Weight,
	Color,
	Shadow,
	Size,
	Letter,
	Line,
	Decoration
} from '@ui/text';
import { Button, Flex, Input, Box } from '@chakra-ui/react';
import { useTextControl } from '@store/properties';
import { generateID } from '@utils/data';

const Text = memo(() => {
	const { setID } = useTextControl.getState();

	return (
		<>
			<Title text='Text' />

			<Spacer />

			<Details py='0px' pb='1rem'>
				<Button 
					variant='outline'
					onClick={() => {
						setID(generateID());
					}}
				>New Text</Button>
			</Details>

			<Details divisor={false}>
				<Content />
				<Alignment />
				<Fonts />
				<Weight />
				<Color />
				<Shadow />
				<Size />
				<Letter />
				<Line />
				<Decoration />
			</Details>

		</>
	);
});

export { Text };