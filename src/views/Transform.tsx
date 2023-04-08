import { useEffect, useState } from 'react';
import { Flex, Input, Button, Box } from '@chakra-ui/react';
import { Details, Explorer } from '@components';
import { Title, Spacer, DivHorz, InputTransform } from '@ui';
import { Common } from '@ui/transform/Common';
import { Facebook } from '@ui/transform/Facebook';
import { Instagram } from '@ui/transform/Instagram';
import { Twitter } from '@ui/transform/Twitter';
import { useCanvas } from '@store/canvas';
import { getBackgroundSize } from '@utils/canvas';
import { useTransformPanel } from '@store/properties';

function Transform() {
	const { setTransformControl } = useCanvas.getState();
	const [ active, setActive ] = useState('none');
	const [ size, setSize ] = useState({ width: 0, height: 0 });

	useEffect(() => {
		setTransformControl(true);

		const unsubTransformPanel = useTransformPanel
			.subscribe((state) => state.size, setSize);

		const { width, height } = getBackgroundSize();

		setSize({
			width,
			height,
		});

		return () => {
			unsubTransformPanel();
			setTransformControl(false);
		}
	}, [])
	
	return (
		<>
			<Title text='Transform' />

			<Details>
				<Button variant='outlineLight'>Reset to default</Button>
				<InputTransform 
					value={size} 
					onChange={(size) => {
						const { setSize } = useTransformPanel.getState();
						setSize(size);
					}}
				/>
			</Details>

			<Spacer />

			<Explorer>
				<Flex justifyContent='center' direction='column' gap={3}>
					<Common />
				{/*	<Spacer size={0.1} />
					<DivHorz variant={'xl'} />
					<Facebook 
						active={active}
						setActive={setActive}					
					/>
					<Spacer size={0.1} />
					<DivHorz variant={'xl'} />
					<Instagram 
						active={active}
						setActive={setActive}					
					/>
					<Spacer size={0.1} />
					<DivHorz variant={'xl'} />
					<Twitter 
						active={active}
						setActive={setActive}					
					/>*/}
				</Flex>
			</Explorer>
		</>
	);
}

export { Transform };