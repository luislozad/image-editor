// @ts-nocheck
import { useState } from 'react';
import { Flex } from '@chakra-ui/react';
import { 
	Library, 
	Transform, 
	Filters, 
	Adjust, 
	Focus, 
	Frames, 
	Overlays, 
	Text, 
	TextDesign, 
	Stickers, 
	Brush, 
} from '@ui/toolbar';
import { Category } from './types';

interface ToolbarProps {
	onCategory: (category: Category) => void;
}

function Toolbar(props: ToolbarProps) {
	const { onCategory } = props;
	const [category, setCategory] = useState<Category>('library')

	return (
		<Flex 
			alignItems='center' 
			bg='toolbar' 
			w='55px' 
			h='100%' 
			direction='column'
		>
			<Library 
				focus={category === 'library'} 
				onClick={() => {
					setCategory('library');
					onCategory('library');
				}} 
			/>			
			<Transform 
				focus={category === 'transform'} 
				onClick={() => {
					setCategory('transform');
					onCategory('transform');
				}} 
			/>			
			<Filters 
				focus={category === 'filters'} 
				onClick={() => {
					setCategory('filters');
					onCategory('filters');
				}} 
			/>			
			<Adjust 
				focus={category === 'adjust'} 
				onClick={() => {
					setCategory('adjust');
					onCategory('adjust');
				}} 
			/>			
			<Focus 
				focus={category === 'focus'} 
				onClick={() => {
					setCategory('focus');
					onCategory('focus');
				}} 
			/>			
			<Frames 
				focus={category === 'frames'} 
				onClick={() => {
					setCategory('frames');
					onCategory('frames');
				}} 
			/>			
			<Overlays 
				focus={category === 'overlays'} 
				onClick={() => {
					setCategory('overlays');
					onCategory('overlays');
				}} 
			/>			
			<Text 
				focus={category === 'text'} 
				onClick={() => {
					setCategory('text');
					onCategory('text');
				}} 
			/>			
			{/*<TextDesign 
				focus={category === 'textDesign'} 
				onClick={() => {
					setCategory('textDesign');
					onCategory('textDesign');
				}} 
			/>	*/}		
			<Stickers 
				focus={category === 'stickers'} 
				onClick={() => {
					setCategory('stickers');
					onCategory('stickers');
				}} 
			/>			
			<Brush 
				focus={category === 'brush'} 
				onClick={() => {
					setCategory('brush');
					onCategory('brush');
				}} 
			/>			
		</Flex>
	);
}

export { Toolbar };