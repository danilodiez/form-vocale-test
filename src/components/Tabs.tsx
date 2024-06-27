import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';
import { JobInfoForm } from './JobInfoForm';
import { Button } from '@mui/material';
import { CustomButton } from './Button';
import { CompensationForm } from './CompensationForm';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
const StyledTabs = styled(Tabs)({
  borderBottom: '1px solid transparent',
  '& .MuiTabs-indicator': {
    backgroundColor: '#65558F',
    border: '1px solid #65558F',
  },
});
const StyledTab = styled((props) => <Tab {...props} />)(({ theme }) => ({
  textTransform: 'none',
  color: '#00000F',
  '&.Mui-selected': {
    color: '#00000F',
  },
}));

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export function CustomTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: '100%',
        height: '90vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Box>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: 'divider',
            backgroundColor: '#FEF7FF',
          }}
        >
          <StyledTabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            variant="fullWidth"
          >
            <StyledTab label="Job Information" />
            <StyledTab label="Compensation" />
          </StyledTabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <JobInfoForm />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <CompensationForm />
        </CustomTabPanel>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <CustomButton />
      </Box>
    </Box>
  );
}
