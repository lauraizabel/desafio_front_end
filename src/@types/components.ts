import { AnswerAndUser } from './answer';

export interface IFieldProps {
  type?: string;
  value: string;
  required: boolean;
  helperText?: string;
  label?: string;
  options?: string[];
  placeholder: string;
  isMultiSelect?: boolean;
  onChange: (name: string, value: any) => void;
  name: string;
  error: boolean;
  readonly?: boolean;
}

export interface ICardProps extends AnswerAndUser {}
