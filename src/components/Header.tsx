import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: '#FEF7FF',
          paddingLeft: 0,
          boxShadow: 'none',
        }}
      >
        <Toolbar>
          <IconButton
            size="medium"
            edge="start"
            color="#OOOOFO"
            aria-label="menu"
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            color="black"
            sx={{ flexGrow: 1, textAlign: 'center' }}
          >
            Add New Hire
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
