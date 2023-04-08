import { useEffect, useState, useCallback, useMemo } from 'react';
import { Flex, Input, Box } from '@chakra-ui/react';
import { Explorer } from '@components';
import { Title, Spacer, DivHorz, SubTitle2, RangeInputType1 } from '@ui';
import { useBasic, useRefinements } from '@store/properties';
import { shallow } from 'zustand/shallow';

function Adjust() {
	const [
		setBrigtness, 
		setContrast,
		setSaturation,
		setGamma,		
	] = useBasic((state) => [
		state.setBrigtness, 
		state.setContrast, 
		state.setSaturation, 
		state.setGamma
	], shallow);

	const {
		setClarity,
		setShadows,
		setHighlights,
		setExposure,
		setBlacks,
		setWhites,
		setTemperature,
		setSharpness,
	} = useRefinements.getState();

	const basic = useBasic.getState();
	const refinements = useRefinements.getState();

	return (
		<>
			<Title text='Adjust' />

			<Spacer />

			<Explorer>
				<Flex justifyContent='center' direction='column' gap={2} pb='1rem'>
					<Flex justifyContent='center' direction='column' gap={2}>

						<SubTitle2 variant='base' text='BASIC' />

						<RangeInputType1 
							label='Brightness' 
							defaultValue={basic.brigtness} 
							onChange={setBrigtness} 
						/>
						<RangeInputType1 
							label='Contrast' 
							defaultValue={basic.contrast} 
							onChange={setContrast} 
						/>
						<RangeInputType1 
							label='Saturation' 
							defaultValue={basic.saturation} 
							onChange={setSaturation} 
						/>
						<RangeInputType1 
							label='Gamma' 
							defaultValue={basic.gamma} 
							onChange={setGamma} 
						/>						

						<Spacer size={0.5} />

					</Flex>

					<Flex justifyContent='center' direction='column' gap={2}>
						<SubTitle2 variant='base' text='REFINEMENTS' />

						<RangeInputType1 
							label='Clarity' 
							defaultValue={refinements.clarity} 
							onChange={setClarity} 
						/>						
						<RangeInputType1 
							label='Shadows' 
							defaultValue={refinements.shadows} 
							onChange={setShadows} 
						/>						
						<RangeInputType1 
							label='Highlights' 
							defaultValue={refinements.highlights} 
							onChange={setHighlights} 
						/>						
						<RangeInputType1 
							label='Exposure' 
							defaultValue={refinements.exposure} 
							onChange={setExposure} 
						/>						
						<RangeInputType1 
							label='Blacks' 
							defaultValue={refinements.blacks} 
							onChange={setBlacks} 
						/>						
						<RangeInputType1 
							label='Whites' 
							defaultValue={refinements.whites} 
							onChange={setWhites} 
						/>						
						<RangeInputType1 
							label='Temperature' 
							defaultValue={refinements.temperature} 
							onChange={setTemperature} 
						/>						
						<RangeInputType1 
							label='Sharpness' 
							defaultValue={refinements.sharpness} 
							onChange={setSharpness} 
						/>						
					</Flex>					
				</Flex>
			</Explorer>
		</>
	);
}

export { Adjust };