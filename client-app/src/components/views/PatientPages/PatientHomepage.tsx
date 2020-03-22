import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Typography, Box } from "@material-ui/core";
import ReadMotiTips from "./ReadMotiTips";
import CommonSignsCheckList from "./CommonSignsCheckList";
import SendEmergencyAlert from "./SendEmergencyAlert";
import MotiVideoGame from "./MotiVideoGame";
import EnterDailyInfo from "./EnterDailyInfo";

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

export default function PatientHomepage() {
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
        <Tab label="Daily Tips" />
        <Tab label="Emergency Alert" />
        <Tab label="Motivational Suggestions" />
        <Tab label="Daily Infomation" />
        <Tab label="Common Signs Checklist" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <ReadMotiTips />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SendEmergencyAlert />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <MotiVideoGame />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <EnterDailyInfo />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <CommonSignsCheckList />
      </TabPanel>
    </div>
  );
}
