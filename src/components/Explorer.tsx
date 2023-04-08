// @ts-nocheck
import { Box } from '@chakra-ui/react';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

interface ExplorerProps {
	children: JSX.Element;
	bg?: string;
	px?: string;
	w?: string;
	onScrollBottom?: () => void;
}

function Explorer(props: ExplorerProps) {
	const { children, w, onScrollBottom, bg = 'explorer', px = '1.5rem' } = props;

	return (
		<OverlayScrollbarsComponent
			style={{
				flex: 1
			}}
			events={{
				scroll: (_, e) => {
					const element = (e.target! as HTMLElement);
					const isScrollBottom = Math.abs(element.scrollHeight - element.scrollTop - element.clientHeight) < 1;
					if (isScrollBottom) {
						onScrollBottom && onScrollBottom();
					}
				}
			}}
			defer
		>
			<Box bg={bg} px={px} overflow='auto' w={w}>
				{children}
			</Box>
		</OverlayScrollbarsComponent>
	);
}

export { Explorer };