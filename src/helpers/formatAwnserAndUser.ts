import { ResponseAnswer, AnswerAndUser } from '../@types/answer';

const defaultAnswer = {
  personalAssessment: 0,
  categories: [''],
  releaseDate: '',
  filmName: '',
  urlToImdb: '',
};

export const formatAwnserAndUser = (form: ResponseAnswer[]) => {
  const formatted: AnswerAndUser[] = form.map((response) => {
    const formattedResponse: AnswerAndUser = {
      user: response.metaData,
      answer: { ...defaultAnswer },
    };

    formattedResponse.answer.categories = response.answer.categorias302641;
    formattedResponse.answer.filmName = response.answer.nomeDoFilme302645;
    formattedResponse.answer.personalAssessment =
      response.answer.avaliacaoPessoal302642;
    formattedResponse.answer.releaseDate =
      response.answer.dataDeLancamento302643;
    formattedResponse.answer.urlToImdb =
      response.answer.urlParaOSiteDoDoImdbComInformacoesSobreOFilme302644;
    return formattedResponse;
  });

  return formatted;
};
