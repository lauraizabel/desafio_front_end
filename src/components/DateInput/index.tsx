import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';

import { Container } from './styles';
import { IFieldProps } from '../../@types/components';

const DateInput: React.FC<IFieldProps> = ({
  required,
  helperText,
  label,
  onChange,
  name,
}: IFieldProps) => {
  const handleChange = (value: MaterialUiPickersDate) => {
    onChange(name, value);
  };

  return (
    <Container>
      <MuiPickersUtilsProvider locale={ptBR} utils={DateFnsUtils}>
        <KeyboardDatePicker
          clearable
          label={label}
          required={required}
          helperText={helperText}
          value={new Date()}
          placeholder="10/10/2018"
          inputVariant="outlined"
          onChange={handleChange}
          minDate={new Date('1800-01-01')}
          maxDate={new Date('2100-01-01')}
          format="dd/MM/yyyy"
          variant="inline"
          invalidDateMessage="Data inválida."
          invalidLabel="Formato inválido."
          minDateMessage="Data inválida"
          maxDateMessage="Data inválida"
        />
      </MuiPickersUtilsProvider>
    </Container>
  );
};
export default DateInput;
