import HttpClient from '../http-client';

export const fetchFormDetails = async () =>
  HttpClient.get(process.env.REACT_APP_GET_FORM ?? '');
