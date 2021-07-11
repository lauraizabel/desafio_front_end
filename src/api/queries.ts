import { gql } from '@apollo/client';

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
