// @ts-nocheck
import { Box } from '@chakra-ui/react';
import Tippy from '@tippyjs/react';

type FloatDirection = 'left' | 'right' | 'top' | 'bottom';

interface ComponentFloatProps {
	children: JSX.Element;
	dir: FloatDirection;
	interactive?: boolean;
	content: JSX.Element | string;
}

function ComponentFloat(props: ComponentFloatProps) {
	const { children, dir, content, interactive = true } = props;

	return (
		<Tippy 
			interactive={interactive} 
			placement={dir} 
			content={content} 
			theme='light' 
			trigger='mouseenter' 
			hideOnClick={false}
			offset={[0, -6]}
		>
			{ children }
		</Tippy>
	);
}

export { ComponentFloat };