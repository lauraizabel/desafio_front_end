export interface AnswerInsideResponse {
  avaliacaoPessoal302642: number;
  categorias302641: string[];
  dataDeLancamento302643: string;
  nomeDoFilme302645: string;
  urlParaOSiteDoDoImdbComInformacoesSobreOFilme302644: string;
}

export interface UserInsideResponse {
  createdAt: Date;
  createdAtCoordinates: { longitude: number; latitude: number };
  createdAtDevice: Date;
  createdAtSource: string;
  friendlyId: string;
  updatedAt: Date;
  updatedAtCoordinates: { longitude: number; latitude: number };
  userId: number;
  userName: string;
}

export interface ResponseAnswer {
  answer: AnswerInsideResponse;
  metaData: UserInsideResponse;
}

export interface Answer {
  personalAssessment: number;
  categories: string[];
  releaseDate: string;
  filmName: string;
  urlToImdb: string;
}

export interface AnswerAndUser {
  answer: Answer;
  user: UserInsideResponse;
}
