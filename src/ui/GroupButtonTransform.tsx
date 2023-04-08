// @ts-nocheck
import { Flex, Button } from '@chakra-ui/react';

type TransformType = 'rotate' | 'scale';

interface GroupButtonTransformProps {
	onAction: (type: TransformType) => void;
	actionType: TransformType;
}

function GroupButtonTransform(props: GroupButtonTransformProps) {
	const { onAction, actionType = 'rotate' } = props;

	return (
		<Flex gap={2}>
			<Button 
				onClick={() => onAction('rotate')}
				fontWeight={400}
				fontSize={'.75em'}
				variant={'ghost'}
				height='max-content'
				padding='8px 4px'
				backgroundColor={actionType === 'rotate' ? 'gray.400' : undefined}
			>
				Rotation
			</Button>
			<Button 
				onClick={() => onAction('scale')}
				fontWeight={400}
				fontSize={'.75em'}
				variant={'ghost'}
				height='max-content'
				padding='8px 4px'
				backgroundColor={actionType === 'scale' ? 'gray.400' : undefined}
			>
				Scale
			</Button>
		</Flex>
	)
}

export { GroupButtonTransform };