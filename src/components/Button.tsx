import styled from '@emotion/styled';
import { Button, ButtonProps } from '@mui/material';

const ColorButton = styled(Button)<ButtonProps>(({}) => ({
  backgroundColor: '#65558F',
  color: 'white',
  borderRadius: '100px',
  '&:hover': {
    backgroundColor: '#65558F',
  },
  '&:disabled': {
    backgroundColor: 'gray',
  },
}));
export const CustomButton = ({ disabled }) => {
  return <ColorButton disabled={disabled}>Next</ColorButton>;
};
