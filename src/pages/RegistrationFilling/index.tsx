import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { Button } from '@material-ui/core';
import { FormStructureFormatted } from '../../@types/FormField';
import { Container, ContainerRegister, ContainerButton } from './styles';
import { LOAD_FORM } from '../../api/queries';
import { useBlockLoadingContext } from '../../contexts/BlockLoaderContext';
import Input from '../../components/Input';
import { formatStructure } from '../../helpers/formatStructure';
import Select from '../../components/Select';
import StarsSelect from '../../components/StarsSelect';
import DateInput from '../../components/DateInput';

const formFieldDefinitions = {
  textfield: { component: Input, defaultValue: '' },
  checkboxfield: { component: Select, defaultValue: [] },
  urlfield: { component: Input, defaultValue: '' },
  datefield: { component: DateInput, defaultValue: new Date() },
  ratingfield: { component: StarsSelect, defaultValue: '' },
};

const RegistrationFilling: React.FC = () => {
  const { setIsLoading } = useBlockLoadingContext();

  const [formValues, setFormValues] = useState<any>({});
  const [formFields, setFormFields] = useState<FormStructureFormatted[]>([]);

  const { data, loading } = useQuery(LOAD_FORM);

  useEffect(() => {
    setIsLoading(loading);
    if (data) {
      const { form_structure: formStructure_ } = data;
      const formattedStructureArray = formatStructure(formStructure_);

      const formDefaultValues = Object.fromEntries(
        formattedStructureArray.map((field) => [
          field.id,
          formFieldDefinitions[field.type].defaultValue,
        ]),
      );

      setFormValues(formDefaultValues);
      setFormFields(formattedStructureArray);
    }
  }, [loading, data]);

  const handleChange = (name: string, value: any) => {
    setFormValues({ ...formValues, [name]: value });
  };

  console.log(formValues);

  return (
    <Container>
      {formFields?.map((field) => {
        const RenderField = formFieldDefinitions[field.type].component;
        return (
          <ContainerRegister>
            <RenderField
              placeholder={field.label}
              required={field.required}
              type={field.type}
              label={field.label}
              options={field.options ?? []}
              isMultiSelect={field.multiple}
              helperText={field.helperLabel}
              onChange={handleChange}
              name={field.id}
              value={formValues[field.id]}
            />
          </ContainerRegister>
        );
      })}
      <ContainerButton>
        <Button variant="contained" color="primary">
          SALVAR RESPOSTAS
        </Button>
      </ContainerButton>
    </Container>
  );
};

export default RegistrationFilling;
