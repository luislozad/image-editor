// @ts-nocheck
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Flex,
  Box,
} from '@chakra-ui/react';

interface FolderProps {
	cover: string;
	title: string;
	children: JSX.Element;
}

function Folder(props: FolderProps) {
	const { cover, title, children } = props;

	return (
		<Accordion allowToggle>
			<AccordionItem>
				<Box bgImage={cover} w='11.375rem' borderRadius='md' overflow='hidden' h='5.375rem' backgroundPosition='center center' backgroundRepeat='no-repeat' backgroundSize='cover' border='1px solid transparent'>
					<AccordionButton p='0px' h='full'>
							<Flex alignItems='end' w='full' h='full'>
								<Flex color='folderText' h='2.5rem' w='full' justifyContent='center' alignItems='center' fontSize='0.8125rem' fontWeight='500' bg='linear-gradient(transparent, rgba(0, 0, 0, 0.6))'>
									{title}
									<AccordionIcon />
								</Flex>
							</Flex>
					</AccordionButton>
				</Box>
				<AccordionPanel p='10px 0px'>
					{children}
				</AccordionPanel>
			</AccordionItem>
		</Accordion>
	);
}

export { Folder };