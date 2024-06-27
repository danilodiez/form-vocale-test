import {
  FormControl,
  FormLabel,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import { SearchAutocomplete } from './SearchAutocomplete';
import LimitTags, { MultivalueSelect } from './MultivalueSelect';
import RadioGroup from '@mui/material/RadioGroup/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel/FormControlLabel';
import Radio from '@mui/material/Radio/Radio';

export function CompensationForm() {
  const [location, setLocation] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setLocation(event.target.value);
  };
  const roles = [
    { label: 'Software Engineer', id: 'software_engineer' },
    { label: 'Senior Software Engineer', id: 'senior_software_engineer' },
    { label: 'Junior Software Engineer', id: 'junior_software_engineer' },
    { label: 'Software Engineer II', id: 'software_engineer_ii' },
    { label: 'Lead Software Engineer', id: 'lead_software_engineer' },
    { label: 'Software Architect', id: 'software_architect' },
    { label: 'Frontend Developer', id: 'frontend_developer' },
    { label: 'Backend Developer', id: 'backend_developer' },
    { label: 'Full Stack Developer', id: 'full_stack_developer' },
    { label: 'Software Engineer Intern', id: 'software_engineer_intern' },
  ];

  // Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
  const names = [
    { label: 'John Smith', id: 'john_smith' },
    { label: 'Sara Johnson', id: 'sara_johnson' },
    { label: 'Michael Williams', id: 'michael_williams' },
    { label: 'Jessica Brown', id: 'jessica_brown' },
    { label: 'Daniel Jones', id: 'daniel_jones' },
    { label: 'Emily Garcia', id: 'emily_garcia' },
    { label: 'David Miller', id: 'david_miller' },
    { label: 'Laura Wilson', id: 'laura_wilson' },
    { label: 'Chris Lee', id: 'chris_lee' },
    { label: 'Amy White', id: 'amy_white' },
  ];
  const locations = [
    { label: 'SF Office', id: 'sf_office' },
    { label: 'NYC Office', id: 'nyc_office' },
    { label: 'LA Office', id: 'la_office' },
    { label: 'Chicago Office', id: 'chicago_office' },
    { label: 'Austin Office', id: 'austin_office' },
    { label: 'Seattle Office', id: 'seattle_office' },
    { label: 'Boston Office', id: 'boston_office' },
    { label: 'Atlanta Office', id: 'atlanta_office' },
    { label: 'Miami Office', id: 'miami_office' },
    { label: 'Denver Office', id: 'denver_office' },
  ];
  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        marginTop: '32px',
        '& > :not(style)': { width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
      <FormControl>
        <FormLabel id="flsa">FLSA Status</FormLabel>
        <RadioGroup aria-labelledby="flsa-label" name="flsa-group">
          <FormControlLabel value="exempt" control={<Radio />} label="Exempt" />
          <FormControlLabel
            value="nonexempt"
            control={<Radio />}
            label="Nonexempt"
          />
        </RadioGroup>
      </FormControl>
      <SearchAutocomplete id="jobTitle" options={roles} label="Job Title" />
      <LimitTags id="directReports" options={names} label="Direct Reports" />
    </Box>
  );
}
