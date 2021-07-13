import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { Button } from '@material-ui/core';
import * as yup from 'yup';
import { useHistory } from 'react-router-dom';

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
import { errorsYup } from '../../helpers/errorsYup';

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

yup.setLocale(errorsYup);

const RegistrationFilling: React.FC = () => {
  const { setIsLoading } = useBlockLoadingContext();

  const [formValues, setFormValues] = useState<any>({});
  const [formFields, setFormFields] = useState<FormStructureFormatted[]>([]);

  const { data, loading } = useQuery(LOAD_FORM);

  const history = useHistory();

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

  const handleErrorFields = (field: string, error: string) => {
    const oldFormFields = [...formFields];
    const findFieldIndex = formFields.findIndex(
      (field_) => field_.id === field,
    );
    oldFormFields[findFieldIndex].error = error;
    setFormFields(oldFormFields);
  };

  const handleOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      await formSchema.validate(formValues);
      await formSchema.isValid(formValues);
      history.goBack();
    } catch (error) {
      handleErrorFields(error.path, error.errors);
    }
  };

  return (
    <Container>
      <ContainerForm onSubmit={handleOnSubmit}>
        {formFields?.map((field) => {
          const RenderField = formFieldDefinitions[field.type].component;
          const hasError = field.error.length > 0;
          const textHelper = hasError ? field.error : field.helperLabel;
          return (
            <ContainerRegister>
              <RenderField
                placeholder={field.label}
                required={field.required}
                type={field.type}
                label={field.label}
                options={field.options ?? []}
                isMultiSelect={field.multiple}
                helperText={textHelper}
                onChange={handleChange}
                name={field.id}
                value={formValues[field.id]}
                error={hasError}
              />
            </ContainerRegister>
          );
        })}
        <ContainerButton>
          <Button variant="contained" color="primary" type="submit">
            SALVAR RESPOSTAS
          </Button>
          <Button
            variant="text"
            color="secondary"
            onClick={() => history.goBack()}
          >
            VOLTAR
          </Button>
        </ContainerButton>
      </ContainerForm>
    </Container>
  );
};

export default RegistrationFilling;
