import { gql } from '@apollo/client';

export const LOAD_ANSWER = gql`
  query ANSWER {
    answer(formId: 23458) {
      answer {
        nomeDoFilme302645
        categorias302641
        avaliacaoPessoal302642
        dataDeLancamento302643
        urlParaOSiteDoDoImdbComInformacoesSobreOFilme302644
      }
      metaData {
        userId
        userName
        createdAtSource
        friendlyId
        createdAt
        createdAtDevice
        createdAtCoordinates
        updatedAt
        updatedAtCoordinates
      }
    }
  }
`;

export const LOAD_FORM = gql`
  query FormStructure {
    form_structure(formId: 23458) {
      label
      componentId
      type
      helpBlock
      order
      options
      minimum
      maximum
      widget
      components {
        label
        componentId
        type
        options
        minimum
        maximum
        widget
        components {
          label
          componentId
          type
          options
          minimum
          maximum
          widget
          components {
            label
            componentId
            type
            options
            minimum
            maximum
            widget
            components {
              label
              type
              options
              minimum
              maximum
              widget
            }
          }
        }
      }
    }
  }
`;
