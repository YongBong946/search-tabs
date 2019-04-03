import styled from 'styled-components';
import StyledTabPanel from './TabPanel';
import StyledTabs from './Tabs';
import StyledTabList from './TabList';
import StyledTab from './Tab.js';

export const Tabs = styled(StyledTabs)`
  font-family: BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 15px;
  width: ${props => (props.vertical ? '416px' : '100vw')};
  min-width: ${props => (props.vertical ? '416px' : '100vw')};
  height: ${props => (props.vertical ? '100vh' : '15vh')};
  display: flex;
  margin: 0;
  flex-direction: ${props => (props.vertical ? 'row' : 'column')};
  position: absolute;
  overflow: hidden;
`;

export const TabList = styled(StyledTabList)`
  margin: 0;
  width: ${props => (props.vertical ? '96px' : '100%')};
  min-width: ${props => (props.vertical ? '96px' : '100%')};
  height: ${props => (props.vertical ? '100%' : '100%')};
  display: flex;
  flex-direction: ${props => (props.vertical ? 'column' : 'row')};
  list-style: none;
  background-color: black;
  padding: 0;
`;

export const Tab = styled(StyledTab)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  width: ${props => (props.vertical ? '96px' : '20%')};
  min-width: ${props => (props.vertical ? '96px' : '20%')};
  height: ${props => (props.vertical ? '10%' : '80px')};
  min-height: ${props => (props.vertical ? '10%' : '80px')};
  user-select: none;
  color: white;
  cursor: arrow;
  background-color: black;

  &:hover,
  &.selected {
    ${props =>
      props.vertical
        ? 'border-right: 3px solid red'
        : 'border-bottom: 3px solid red'};
  }

  &:focus {
    outline: none;
  }
`;

export const TabPanel = styled(StyledTabPanel)`
  margin: 0;
  display: none;
  padding-bottom: 96px;
  padding-left: 32px;
  padding-right: 32px;
  width: ${props => (props.vertical ? '256px' : '100%')};
  min-width: ${props => (props.vertical ? '256px' : '100%')};
  color: white;
  background-color: #f2f2f2;
  overflow: scroll;
  z-index: 4444;

  &.selected {
    display: block;
  }
`;
