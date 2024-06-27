import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  marginLeft: 0,
  width: '100%',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  paddingLeft: '10px',
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    paddingLeft: '28px',
  },
  '& .MuiFormLabel-root': {
    paddingLeft: '24px',
  },
});

const Completion = ({ id, options, label }) => (
  <Autocomplete
    multiple
    limitTags={2}
    id={id}
    options={options}
    getOptionLabel={(option) => option.label}
    sx={{ width: '100%' }}
    renderInput={(params) => <StyledTextField {...params} label={label} />}
  />
);

export default function LimitTags({ id, options, label }) {
  return (
    <Box sx={{ flexGrow: 1, width: '100%' }}>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <Completion id={id} label={label} options={options} />
      </Search>
    </Box>
  );
}
