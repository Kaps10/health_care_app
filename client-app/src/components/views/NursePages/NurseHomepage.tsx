import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Typography, Box } from "@material-ui/core";
import EnterVitalSigns from "./EnterVitalSigns";
import CheckVitalSigns from "./CheckVitalSigns";
import EnterMotiTips from "./EnterMotiTips";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </Typography>
  );
}

export default function NurseHomepage() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab label="Enter Vital Signs" />
        <Tab label="Check Vital Signs" />
        <Tab label="Daily Motivational Tips" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <EnterVitalSigns />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CheckVitalSigns />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <EnterMotiTips />
      </TabPanel>
    </div>
  );
}
