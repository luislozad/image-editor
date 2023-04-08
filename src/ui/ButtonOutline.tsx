// @ts-nocheck
import { Button } from '@chakra-ui/react'

interface ButtonOutlineProps {
	children: JSX.Element;
	isDisabled?: boolean;
}

function ButtonOutline(props: ButtonOutlineProps) {
	const { children, isDisabled } = props;

	return (
		<Button variant='lite' p='4px 8px' minH='32px' h='100%' color='title' isDisabled={isDisabled}>
			{children}
		</Button>
	);
}

export { ButtonOutline };