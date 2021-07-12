import React from 'react';
import { Rating } from '@material-ui/lab';
import { InputLabel, FormHelperText, FormControl } from '@material-ui/core';
import { IFieldProps } from '../../@types/Components';

import { Container } from './styles';

const StarsSelect: React.FC<IFieldProps> = ({
  name,
  required,
  helperText,
  label,
  value,
  onChange,
}: IFieldProps) => {
  const handleChange = (values: number | null) => {
    onChange(name, values?.toString());
  };

  return (
    <Container>
      <FormControl required={required}>
        <Rating
          title={label}
          name={name}
          onChange={(event, val) => handleChange(val)}
        />
        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
    </Container>
  );
};

export default StarsSelect;
