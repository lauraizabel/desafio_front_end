export interface FormFieldStructure {
  label: string | null;
  componentId: string;
  type:
    | 'urlfield'
    | 'datefield'
    | 'ratingfield'
    | 'checkboxfield'
    | 'textfield';
  helpBlock: string | null;
  order: string | null;
  options: string[] | null;
  minimum: {
    type: string | null;
    value: number | null;
  };
  maximum: number | null;
  widget: string | null;
}

export interface FormStructureAPI extends FormFieldStructure {
  components: FormFieldStructure[] | FormFieldStructure | null;
}

export interface FormStructureFormatted {
  id: string;
  required: boolean;
  options: string[] | null;
  order: number;
  type:
    | 'urlfield'
    | 'datefield'
    | 'ratingfield'
    | 'checkboxfield'
    | 'textfield';
  label: string;
  helperLabel: string;
  multiple: boolean;
  widget?: string;
}
export interface FormValues {
  [k: string]: string;
}
