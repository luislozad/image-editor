// @ts-nocheck
import { useState } from 'react';
import { GridContent, ButtonRectImage } from '@ui';
import {
	FacebookProfileIcon,
	FacebookTitleIcon,
	FacebookPostIcon,
} from './icons';
import { Block } from './Block';
import { ActiveItem } from './types';

function Facebook(props: ActiveItem) {
	const { active, setActive } = props;

	return (
		<GridContent title='Facebook'>
			<ButtonRectImage
				w='87px'
				h='87px'
				focus={active === 'Profile_Facebook'}
				backgroundColor='gray.200'
				onClick={() => {
					setActive('Profile_Facebook')
				}}
			>
				<Block 
					icon={<FacebookProfileIcon />}
					name='Profile'
				/>
			</ButtonRectImage>

			<ButtonRectImage
				w='87px'
				h='87px'
				focus={active === 'Title_Facebook'}
				backgroundColor='gray.200'
				onClick={() => {
					setActive('Title_Facebook')
				}}
			>
				<Block 
					icon={<FacebookTitleIcon />}
					name='Title'
				/>
			</ButtonRectImage>

			<ButtonRectImage
				w='87px'
				h='87px'
				focus={active === 'Post_Facebook'}
				backgroundColor='gray.200'
				onClick={() => {
					setActive('Post_Facebook')
				}}
			>
				<Block 
					icon={<FacebookPostIcon />}
					name='Post'
				/>
			</ButtonRectImage>			
		</GridContent>
	);
}

export { Facebook };