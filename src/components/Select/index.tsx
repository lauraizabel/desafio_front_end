// es
import React from 'react';
import {
  Select as SelectUI,
  MenuItem,
  InputLabel,
  FormHelperText,
  FormControl,
} from '@material-ui/core';
import { Container } from './styles';
import { IFieldProps } from '../../@types/Components';

const Select: React.FC<IFieldProps> = ({
  placeholder,
  required,
  label,
  options,
  value,
  isMultiSelect,
  helperText,
  name,
  onChange,
}: IFieldProps) => {
  const handleChange = (
    event: React.ChangeEvent<{
      name?: string | undefined;
      value: any;
    }>,
  ) => {
    onChange(event.target.name ?? '', event.target.value);
  };

  return (
    <Container>
      <FormControl>
        <InputLabel>{label}</InputLabel>
        <SelectUI
          required={required}
          label={label}
          variant="outlined"
          placeholder={placeholder}
          onChange={handleChange}
          multiple={isMultiSelect}
          autoWidth={true}
          value={[]}
          name={name}
        >
          {options?.map((val) => (
            <MenuItem value={val}>{val}</MenuItem>
          ))}
        </SelectUI>
        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
    </Container>
  );
};

export default Select;
