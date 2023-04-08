import { Image } from '@chakra-ui/react';
import { Flex, Input, Button } from '@chakra-ui/react';
import { Details, Explorer, Folder } from '@components';
import { Title, Spacer, GridContent, SquareButton, ButtonRectImage } from '@ui';
// import { Block } from '@ui/transform/Block';
import { useCanvas } from '@store/canvas';
import { library } from '@const/library';

function Library() {
	const { setBackgound, bg } = useCanvas();
	return (
		<>
			<Title text='Library' />

			<Details>
				<Input variant='search' placeholder='Search Library' />
				<Button variant='outline'>Upload Image</Button>
			</Details>

			<Spacer />

			<Explorer>
				<Flex justifyContent='center' direction='column' gap={2}>
					{
						library.map(({ name, thumbnail, images }) => (
							<Folder cover={thumbnail} title={name} key={thumbnail}>
								<GridContent title=''>
									{
										images.map(({ large, thumbnail }) => (
											<ButtonRectImage
												focus={large === bg}
												bg={thumbnail}
												w={'87px'}
												h={'87px'}
												onClick={() => {
													setBackgound(large);
												}}
												key={thumbnail}											
											/>
										))
									}
								</GridContent>
							</Folder>
						))
					}				
				</Flex>
			</Explorer>			
		</>
	);
}

export { Library };