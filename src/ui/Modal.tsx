// @ts-nocheck
import { useEffect } from 'react';
import { Flex, Box, Button, Portal } from '@chakra-ui/react';
import { CloseIcon, ChevronLeftIcon } from '@chakra-ui/icons';
import { usePanel } from '@store/panels';

interface ModalProps {
	isOpen?: boolean;
	onClose?: () => void;
	title: string | JSX.Element;
	children: JSX.Element;
	mx?: string;
	top?: string;
	navegation?: boolean;
	onNavegation?: () => void;
}

function Modal(props: ModalProps) {
	const { viewportLeft } = usePanel.getState();
	const { 
		onClose, 
		onNavegation,
		isOpen, 
		title, 
		children, 
		mx = '1rem', 
		top = '0px',
		navegation = false,
	} = props;
	return (
		<Portal containerRef={viewportLeft}>
			{
				isOpen && (
							<Flex
									transform={`translateY(${top})`}
									mx={mx}
									direction='column'
									inset='0px'
									bg='white' 
									borderRadius='xl'
									w='max-content'
									h='max-content'
									p='5px'
									boxShadow='0px 1px 8px 0px rgba(0,0,0,.05),0px 5px 20px 0px rgba(0,0,0,.08)'
								>
									<Flex 
										w='100%' 
										fontSize='13px' 
										fontWeight='500' 
										justifyContent='space-between'
										alignItems='center'
										pt='0.5rem'
										pb='1rem'
										pl='0.5rem'
									>
										{
											navegation && (
												<Button variant='lite' h='20px' w='20px' onClick={() => onNavegation && onNavegation()}>
													<ChevronLeftIcon boxSize={'15px'} color='title' />
												</Button>									
											)
										}
										<Box>{title}</Box>
										<Button variant='lite' h='20px' w='20px' onClick={() => onClose && onClose()}>
											<CloseIcon boxSize={'8px'} color='title' />
										</Button>
									</Flex>
									<Box pb='0.5rem' pr='9px' pl='0.5rem'>
										{children}				
									</Box>
								</Flex>
						)
			}
		</Portal>	
	);
}

export { Modal };