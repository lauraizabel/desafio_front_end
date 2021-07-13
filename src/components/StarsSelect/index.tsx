import React from 'react';
import { Rating } from '@material-ui/lab';
import { FormHelperText, FormControl } from '@material-ui/core';
import { IFieldProps } from '../../@types/components';

import { Container } from './styles';

const StarsSelect: React.FC<IFieldProps> = ({
  name,
  required,
  helperText,
  label,
  onChange,
  value,
  readonly = false,
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
          value={Number(value)}
          readOnly={readonly}
        />
        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
    </Container>
  );
};

export default StarsSelect;
