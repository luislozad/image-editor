import { Text, Flex } from '@chakra-ui/react';
import { ButtonRectImage, Title, Spacer } from '@ui';
import { Explorer } from '@components';

function Focus() {
	return (
		<>
			<Title text='Focus' />

			<Spacer />

			<Explorer>
				<Flex justifyContent='center' direction='column' gap={2}>
					<ButtonRectImage bg='focus/radial.png'>
						<Flex w='full' h='full' direction='column' justifyContent='end'>						
							<Flex w='full' h='40px' bg='linear-gradient(transparent, rgba(0, 0, 0, 0.6))' justifyContent='center' alignItems='center'>
								<Text color='white' fontSize='13px' fontWeight='400'>Radial</Text>
							</Flex>
						</Flex>
					</ButtonRectImage>

					<ButtonRectImage bg='focus/mirrored.png'>
						<Flex w='full' h='full' direction='column' justifyContent='end'>						
							<Flex w='full' h='40px' bg='linear-gradient(transparent, rgba(0, 0, 0, 0.6))' justifyContent='center' alignItems='center'>
								<Text color='white' fontSize='13px' fontWeight='400'>Mirrored</Text>
							</Flex>				
						</Flex>
					</ButtonRectImage>

					<ButtonRectImage bg='focus/linear.png'>
						<Flex w='full' h='full' direction='column' justifyContent='end'>						
							<Flex w='full' h='40px' bg='linear-gradient(transparent, rgba(0, 0, 0, 0.6))' justifyContent='center' alignItems='center'>
								<Text color='white' fontSize='13px' fontWeight='400'>Linear</Text>
							</Flex>				
						</Flex>
					</ButtonRectImage>

					<ButtonRectImage bg='focus/gaussian.png'>
						<Flex w='full' h='full' direction='column' justifyContent='end'>						
							<Flex w='full' h='40px' bg='linear-gradient(transparent, rgba(0, 0, 0, 0.6))' justifyContent='center' alignItems='center'>
								<Text color='white' fontSize='13px' fontWeight='400'>Gaussian</Text>
							</Flex>				
						</Flex>
					</ButtonRectImage>
				</Flex>
			</Explorer>
		</>
	);
}

export { Focus };