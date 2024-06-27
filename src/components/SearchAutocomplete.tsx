import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import Autocomplete from '@mui/material/Autocomplete/Autocomplete';
import TextField from '@mui/material/TextField/TextField';

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
  '& .MuiFormLabel-root: active': {
    paddingLeft: '0',
  },
});

const Completion = ({ id, options, label }) => (
  <Autocomplete
    disablePortal
    id="id"
    options={options}
    sx={{ width: '100%' }}
    renderInput={(params) => <StyledTextField {...params} label={label} />}
  />
);

export function SearchAutocomplete({ id, options, label }) {
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
