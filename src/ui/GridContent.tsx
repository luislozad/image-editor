// @ts-nocheck
import React from "react";
import { Wrap, WrapItem, Box } from '@chakra-ui/react';
import { SubTitle } from '@ui';

interface GridContentProps {
	title: string;
	children: JSX.Element | JSX.Element[];
}

function GridContent(props: GridContentProps) {
	const { title, children } = props;

	return (
		<Box>
			<SubTitle text={title} />
			<Wrap>
				{
					React.Children.map(children, (child) => {
						return (
							<WrapItem>
								{
									React.cloneElement(child, { ...(child.props || {}) })							
								}
							</WrapItem>
						);
					})
				}
			</Wrap>
		</Box>
	);
}

export { GridContent };