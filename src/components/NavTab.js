import React from 'react';
import { Tabs, Tab, TabList, TabPanel } from './NavTab.style';

const NavTab = props => {
  const { vertical } = props;

  // const vertical = false

  return (
    <Tabs
      vertical={vertical}
      selectedTabPanelClassName="selected"
      selectedTabClassName="selected"
    >
      <TabList vertical={vertical}>
        <Tab vertical={vertical}>Tab 1</Tab>
        <Tab vertical={vertical}>Tab 2</Tab>
        <Tab vertical={vertical}>Tab 3</Tab>
      </TabList>
      <TabPanel vertical={vertical}>Panel 1</TabPanel>
      <TabPanel vertical={vertical}>Panel 2</TabPanel>
      <TabPanel vertical={vertical}>Panel 3</TabPanel>
    </Tabs>
  );
};

export default NavTab;
