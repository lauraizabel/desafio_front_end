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

const formFieldsComponents = {
  textfield: Input,
  checkboxfield: Select,
  urlfield: Input,
  datefield: Input,
  ratingfield: StarsSelect,
};

const RegistrationFilling: React.FC = () => {
  const { setIsLoading } = useBlockLoadingContext();

  const [formFields, setFormFields] = useState<FormStructureFormatted[]>([]);

  const { data, loading } = useQuery(LOAD_FORM);

  useEffect(() => {
    setIsLoading(loading);
    if (data) {
      const { form_structure: formStructure_ } = data;
      const formattedStructureArray = formatStructure(formStructure_);
      setFormFields(formattedStructureArray);
    }
  }, [loading, data]);

  console.log(formFields);

  return (
    <Container>
      {formFields?.map((field) => {
        const RenderField = formFieldsComponents[field.type];
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
