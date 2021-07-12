/* eslint-disable no-template-curly-in-string */

export const errorsYup = {
  mixed: {
    default: 'Valor inválido.',
  },
  string: {
    length: 'Deve ter exatamente ${length} caracteres',
    min: 'Deve ter pelo menos ${min} caracteres',
    max: 'Deve ter no máximo ${max} caracteres',
    email: 'Preencha um e-mail válido',
    url: 'Formato de URL inválida',
    trim: 'Não deve conter espaços no início ou no fim.',
    lowercase: 'Deve estar em maiúsculo',
    uppercase: 'Deve estar em minúsculo',
  },
  date: {
    min: 'Deve ser maior que a data ${min}',
    max: 'Deve ser menor que a data ${max}',
  },
};
