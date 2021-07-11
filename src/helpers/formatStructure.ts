import { FormStructureAPI, FormStructureFormatted } from '../@types/FormField';

const FieldsStructure = {
  id: '',
  required: false,
  options: null,
  order: 0,
  label: '',
  helperLabel: '',
  multiple: false,
  widget: '',
};

export const formatStructure = (form: FormStructureAPI[]) => {
  const newForm: FormStructureFormatted[] = form.map(
    (structure: FormStructureAPI) => {
      const fieldsFormatted: FormStructureFormatted = {
        ...FieldsStructure,
        type: 'textfield',
      };

      fieldsFormatted.id = structure.componentId;
      fieldsFormatted.helperLabel = structure.helpBlock ?? '';
      fieldsFormatted.label = structure.label ?? '';
      fieldsFormatted.required = !!structure.minimum.value;
      fieldsFormatted.multiple = !structure.maximum;
      fieldsFormatted.options = structure.options;
      fieldsFormatted.order = Number(structure.order);
      fieldsFormatted.type = structure.type;

      return fieldsFormatted;
    },
  );
  return newForm;
};
