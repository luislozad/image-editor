import { Flex } from '@chakra-ui/react';
import { Details, Explorer, Folder } from '@components';
import { Title, Spacer, GridContent, ButtonRectImage, TextCover } from '@ui';
import { useFiltersPanel } from '@store/properties';
import { filters, presets } from '@const/filters';
import { getFilterID } from '@utils/filter';
import { shallow } from 'zustand/shallow';
import { Filter } from '@interfaces/filter';

const filterDefault = {
	type: 'none',
	subFilter: [],
};

function Filters() {
	const [ filterData = filterDefault, setFilterData ] = useFiltersPanel((state) => [ state.filterData, state.setFilterData ], shallow);

	return (
		<>
			<Title text='Filters' />

			<Spacer />

			<Explorer>
				<Flex justifyContent='center' direction='column' gap={2}>
					{
						filters.map(({ name, thumbnail, list }) => (
							<Folder cover={thumbnail} title={name} key={name}>						
								<GridContent title='' key={name}>
									{
										list.map(({ name, thumbnail }) => (
											<ButtonRectImage
												focus={filterData.type === name}
												bg={thumbnail}
												w={'87px'}
												h={'87px'}
												onClick={() => {
													const id = getFilterID(name);
													const filter = presets['duotone'];

													setFilterData({
														type: name as Filter,
														subFilter: filter[id],
													});
												}}
												key={thumbnail}											
											>
												<TextCover text={name} />
											</ButtonRectImage>
										))
									}
								</GridContent>								
							</Folder>						
						))
					}				
				</Flex>
			</Explorer>			
		</>
	);
}

export { Filters };