// @ts-nocheck
import { memo, KeyboardEvent } from 'react';
import { Input } from '@chakra-ui/react';
import { fontSearch } from '@utils/font';
import { SearchResult } from './types';

interface FontSearchProps {
	onSearch?: (result: SearchResult) => void;
}

const FontSearch = memo((props: FontSearchProps) => {
	const { onSearch } = props;

	const handlerKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
		const target = (e.target! as HTMLInputElement);
		(fontSearch as any).searchAsync(target.value, 25, { suggest: true }, function(result: string[]) {
			onSearch && onSearch({ result, match: target.value });
		});

	};

	return (
		<Input placeholder='Search' onKeyUp={handlerKeyUp} mb='0.7rem' />
	);
})

export { FontSearch };