// @ts-nocheck
import { GridContent, ButtonRectImage } from '@ui';
import {
	InstagramLandspaceIcon,
	InstagramPortraitIcon,
	InstagramSquareIcon,
	InstagramStoryIcon,
} from './icons';
import { Block } from './Block';
import { ActiveItem } from './types';

function Instagram(props: ActiveItem) {
	const { active, setActive } = props;

	return (
		<GridContent title='Instagram'>
			<ButtonRectImage
				backgroundColor='gray.200'
				focus={active === 'Landspace_Instagram'}
				w='87px'
				h='87px'
				onClick={() => {
					setActive('Landspace_Instagram')
				}}
			>
				<Block 
					icon={<InstagramLandspaceIcon />}
					name='Landspace'
				/>
			</ButtonRectImage>

			<ButtonRectImage
				backgroundColor='gray.200'
				focus={active === 'Portrait_Instagram'}
				w='87px'
				h='87px'
				onClick={() => {
					setActive('Portrait_Instagram')
				}}
			>
				<Block 
					icon={<InstagramPortraitIcon />}
					name='Portrait'
				/>
			</ButtonRectImage>

			<ButtonRectImage
				backgroundColor='gray.200'
				focus={active === 'Square_Instagram'}
				w='87px'
				h='87px'
				onClick={() => {
					setActive('Square_Instagram')
				}}
			>
				<Block 
					icon={<InstagramSquareIcon />}
					name='Square'
				/>
			</ButtonRectImage>

			<ButtonRectImage
				backgroundColor='gray.200'
				focus={active === 'Story_Instagram'}
				w='87px'
				h='87px'
				onClick={() => {
					setActive('Story_Instagram')
				}}
			>
				<Block 
					icon={<InstagramStoryIcon />}
					name='Story'
				/>
			</ButtonRectImage>	
		</GridContent>		
	);
}

export { Instagram };