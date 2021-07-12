import React from 'react';
import { Rating } from '@material-ui/lab';
import { InputLabel, FormHelperText, FormControl } from '@material-ui/core';
import { IFieldProps } from '../../@types/Components';

import { Container } from './styles';

const StarsSelect: React.FC<IFieldProps> = ({
  placeholder,
  required,
  helperText,
  label,
  value,
}: IFieldProps) => (
  <Container>
    <FormControl>
      {/* <InputLabel>{label}</InputLabel> */}
      <Rating title={label} />
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  </Container>
);

export default StarsSelect;
