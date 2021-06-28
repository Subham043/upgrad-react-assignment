import React from "react";
import { Tab, Tabs as TabsComponent, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Login from "../Login/Login"
import Register from "../Register/Register"

const SimpleTabs = () => (
  <TabsComponent>
    <TabList>
     
      <Tab>Login</Tab>
      <Tab>Register</Tab>
    </TabList>
    
     <TabPanel><Login /></TabPanel>
     <TabPanel><Register /></TabPanel>
  </TabsComponent>
);

export default SimpleTabs;