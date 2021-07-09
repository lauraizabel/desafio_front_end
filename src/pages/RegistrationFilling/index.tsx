import React, { useState, useEffect } from 'react';
import { FormStructure } from '../../@types';
import { fetchFormDetails } from '../../api/fill-form/FillForm';
// import { mockForm } from '../../api/mock';
import { Container } from './styles';

const RegistrationFilling: React.FC = () => {
  const [form, setForm] = useState<FormStructure[]>();

  const fetchFormStructure = async () => {
    try {
      const { data } = await fetchFormDetails();
      const { form_structure: formStructure } = data.data;
      setForm(formStructure);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(form);
  useEffect(() => {
    fetchFormStructure();
  }, []);

  return (
    <Container>
      <h1>oi pessoal</h1>
    </Container>
  );
};

export default RegistrationFilling;
