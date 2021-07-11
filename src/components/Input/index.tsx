import React from 'react';
import { TextField, MenuItem } from '@material-ui/core';

import { Container } from './styles';
import { IFieldProps } from '../../@types/Components';

const Input: React.FC<IFieldProps> = ({
  required,
  type,
  helperText,
  label,
  value,
  options,
  placeholder,
}: IFieldProps) => (
  <Container>
    <TextField
      required={required}
      type={type}
      helperText={helperText}
      label={label}
      variant="outlined"
      placeholder={placeholder}
      onChange={(e) => console.log(e.target.value)}
    />
  </Container>
);

export default Input;
