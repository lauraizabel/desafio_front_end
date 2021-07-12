import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { Button } from '@material-ui/core';
import * as yup from 'yup';

import { FormStructureFormatted } from '../../@types/formField';
import {
  Container,
  ContainerRegister,
  ContainerButton,
  ContainerForm,
} from './styles';
import { LOAD_FORM } from '../../api/queries';
import { useBlockLoadingContext } from '../../contexts/BlockLoaderContext';
import Input from '../../components/Input';
import { formatStructure } from '../../helpers/formatStructure';
import Select from '../../components/Select';
import StarsSelect from '../../components/StarsSelect';
import DateInput from '../../components/DateInput';

const formFieldDefinitions = {
  textfield: {
    component: Input,
    defaultValue: '',
    validationSchema: yup.string(),
  },
  checkboxfield: {
    component: Select,
    defaultValue: [],
    validationSchema: yup.array().of(yup.string()),
  },
  urlfield: {
    component: Input,
    defaultValue: '',
    validationSchema: yup.string().url(),
  },
  datefield: {
    component: DateInput,
    defaultValue: new Date(),
    validationSchema: yup.date(),
  },
  ratingfield: {
    component: StarsSelect,
    defaultValue: '',
    validationSchema: yup.string(),
  },
};

const RegistrationFilling: React.FC = () => {
  const { setIsLoading } = useBlockLoadingContext();

  const [formValues, setFormValues] = useState<any>({});
  const [formFields, setFormFields] = useState<FormStructureFormatted[]>([]);

  const { data, loading } = useQuery(LOAD_FORM);

  useEffect(() => {
    setIsLoading(loading);
    if (data) {
      const { form_structure: formFieldsStructure } = data;
      const formattedFields = formatStructure(formFieldsStructure);

      const formDefaultValues = Object.fromEntries(
        formattedFields.map((field) => [
          field.id,
          formFieldDefinitions[field.type].defaultValue,
        ]),
      );

      setFormValues(formDefaultValues);
      setFormFields(formattedFields);
    }
  }, [loading, data]);

  const handleChange = (name: string, value: any) => {
    setFormValues({ ...formValues, [name]: value });
  };

  const formSchema = React.useMemo(() => {
    const shape = Object.fromEntries(
      formFields.map((field) => {
        const schema = formFieldDefinitions[field.type].validationSchema;
        return [field.id, field.required ? schema.required() : schema];
      }),
    );
    return yup.object().shape(shape);
  }, [formFields]);

  const handleOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      const errors = await formSchema.validate(formValues);
      console.log(errors, 'error');
      const valid = await formSchema.isValid(formValues);
      console.log(valid);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <ContainerForm onSubmit={handleOnSubmit}>
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
          <Button variant="contained" color="primary" type="submit">
            SALVAR RESPOSTAS
          </Button>
        </ContainerButton>
      </ContainerForm>
    </Container>
  );
};

export default RegistrationFilling;
