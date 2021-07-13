import React, { useState } from 'react';
import {
  Card as CardUI,
  CardHeader,
  CardContent,
  CardActions,
  Collapse,
  IconButton,
  Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import dayjs from 'dayjs';

import cn from 'classnames';

import { Container } from './styles';
import { ICardProps } from '../../@types/components';
import StarsSelect from '../StarsSelect';

const Card: React.FC<ICardProps> = ({ answer, user }: ICardProps) => {
  const [expand, setExpand] = useState<boolean>(false);

  const handleExpand = () => {
    setExpand(!expand);
  };

  const formattedCategories = answer.categories.join().replace(',', ', ');
  const formattedCreatedAtDate = dayjs(user.createdAt).format('DD/MM/YYYY');
  const formattedReleaseDate = dayjs(answer.releaseDate).format('DD/MM/YYYY');

  return (
    <Container>
      <CardUI>
        <CardHeader
          title={answer.filmName}
          subheader={`Gênero(s): ${formattedCategories}`}
        />
        <CardContent>
          <Typography>Data de Lançamento: {formattedReleaseDate}</Typography>
          <StarsSelect
            value={answer.personalAssessment.toString()}
            error={false}
            readonly={true}
            onChange={() => {}}
            name="Avaliação"
            placeholder="Avaliação"
            required={false}
          />
        </CardContent>
        <CardActions disableSpacing>
          <IconButton onClick={handleExpand} className={cn({ rotate: expand })}>
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expand} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Detalhes da avaliação:</Typography>
            <Typography paragraph>Feita por: {user.userName}</Typography>
            <Typography paragraph>
              Usuário criado em: {formattedCreatedAtDate}
            </Typography>
            <Typography paragraph>
              URL do IMDB para mais detalhes do filme:{' '}
              <a
                href={answer.urlToImdb}
                target="_blank"
                rel="noopener noreferrer"
              >
                {answer.urlToImdb}
              </a>
            </Typography>
          </CardContent>
        </Collapse>
      </CardUI>
    </Container>
  );
};

export default Card;
