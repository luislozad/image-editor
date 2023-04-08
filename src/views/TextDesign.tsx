import { Title, SubTitle2 } from '@ui';
import { Flex } from '@chakra-ui/react';
import { Explorer, Folder, Details } from '@components';

function TextDesign() {
	return (
		<>
			<Title text='Text Design' />

			<Details>
				<Flex direction='column' gap={4}>
					<SubTitle2 text='Text Color' />					
				</Flex>
			</Details>

			<Explorer>
				<Flex justifyContent='center' direction='column' gap={2}>
					{/*<Folder></Folder>*/}
				</Flex>
			</Explorer>
		</>
	);
}

export { TextDesign };