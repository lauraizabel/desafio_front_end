import React from 'react';
import { TextField, MenuItem } from '@material-ui/core';

import { Container } from './styles';
import { IFieldProps } from '../../@types/components';

const Input: React.FC<IFieldProps> = ({
  required,
  type,
  helperText,
  label,
  value,
  placeholder,
  onChange,
  name,
}: IFieldProps) => {
  const onChangeValues = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    onChange(event.target.name, event.target.value);
  };
  return (
    <Container>
      <TextField
        name={name}
        required={required}
        type={type}
        helperText={helperText}
        label={label}
        variant="outlined"
        placeholder={placeholder}
        onChange={onChangeValues}
      />
    </Container>
  );
};
export default Input;
