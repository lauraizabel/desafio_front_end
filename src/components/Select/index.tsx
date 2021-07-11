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
}: IFieldProps) => (
  <>
    <Container>
      <FormControl>
        <InputLabel>{label}</InputLabel>
        <SelectUI
          required={required}
          label={label}
          variant="outlined"
          placeholder={placeholder}
          onChange={(e) => console.log(e.target.value)}
          multiple={isMultiSelect}
          autoWidth={true}
          value={[]}
        >
          {options?.map((val) => (
            <MenuItem value={val}>{val}</MenuItem>
          ))}
        </SelectUI>
        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
    </Container>
  </>
);

export default Select;
