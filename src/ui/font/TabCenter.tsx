import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';

interface TabCenterProps {
	webPanel: JSX.Element;
	customPanel: JSX.Element;
}

function TabCenter(props: TabCenterProps) {
	const { webPanel, customPanel } = props;

	return (
		<Tabs isFitted>
		  <TabList>
		    <Tab>Web</Tab>
		    <Tab>Custom</Tab>
		  </TabList>

		  <TabPanels>
		    <TabPanel px='0px'>
		      {webPanel}
		    </TabPanel>
		    <TabPanel px='0px'>
		      {customPanel}
		    </TabPanel>
		  </TabPanels>
		</Tabs>
	);
}

export { TabCenter };