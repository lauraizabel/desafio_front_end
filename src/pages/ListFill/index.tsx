import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { Button } from '@material-ui/core';

import { useBlockLoadingContext } from '../../contexts/BlockLoaderContext';
import { Container, ContainerCards, ContainerHeader } from './styles';
import { LOAD_ANSWER } from '../../api/queries';
import { formatAwnserAndUser } from '../../helpers/formatAwnserAndUser';
import { AnswerAndUser } from '../../@types/answer';
import Card from '../../components/Card';

const ListFill: React.FC = () => {
  const [answers, setAnswers] = useState<AnswerAndUser[]>([]);
  const { setIsLoading } = useBlockLoadingContext();

  const { data, loading } = useQuery(LOAD_ANSWER);

  useEffect(() => {
    setIsLoading(loading);
    if (data) {
      const { answer } = data;

      const formattedAnswer = formatAwnserAndUser(answer);
      setAnswers(formattedAnswer);
    }
  }, [loading, data]);

  return (
    <Container>
      <ContainerHeader>
        <h3>Lista de Formulários Respondidos</h3>
        <Button color="primary" variant="contained">
          Adicionar mais respostas
        </Button>
      </ContainerHeader>
      <ContainerCards>
        {answers.map(({ answer, user }) => (
          <Card answer={answer} user={user} />
        ))}
      </ContainerCards>
    </Container>
  );
};

export default ListFill;
