export interface FormFieldStructure {
  label: string | null;
  componentId: string | null;
  type: string | null;
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

export interface FormStructure extends FormFieldStructure {
  components: FormFieldStructure[] | FormFieldStructure | null;
}
