// @ts-nocheck
import { GridContent, ButtonRectImage } from '@ui';
import {
	TwitterPostIcon,
	TwitterProfileIcon,
	TwitterTitleIcon,
} from './icons';
import { Block } from './Block';
import { ActiveItem } from './types';

function Twitter(props: ActiveItem) {
	const { active, setActive } = props;

	return (
		<GridContent title='Twitter'>
			<ButtonRectImage
				backgroundColor='gray.200'
				w='87px'
				h='87px'
				focus={active === 'Post_Twitter'}
				onClick={() => {
					setActive('Post_Twitter')
				}}
			>
				<Block 
					icon={<TwitterPostIcon />}
					name='Post'
				/>
			</ButtonRectImage>

			<ButtonRectImage
				backgroundColor='gray.200'
				w='87px'
				h='87px'
				focus={active === 'Profile_Twitter'}
				onClick={() => {
					setActive('Profile_Twitter')
				}}
			>
				<Block 
					icon={<TwitterProfileIcon />}
					name='Profile'
				/>
			</ButtonRectImage>

			<ButtonRectImage
				backgroundColor='gray.200'
				w='87px'
				h='87px'
				focus={active === 'Title_Twitter'}
				onClick={() => {
					setActive('Title_Twitter')
				}}
			>
				<Block 
					icon={<TwitterTitleIcon />}
					name='Title'
				/>
			</ButtonRectImage>
		</GridContent>			
	);
}


export { Twitter };