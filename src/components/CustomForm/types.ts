import { FormControlProps } from "react-bootstrap";

export interface CustomFormProps {
  title: string;
  items: CustomFormItemProps[];
  onSubmit: () => void;
  buttonText?: string;
  disabled?: boolean;
}

export interface CustomFormItemProps extends FormControlProps {
  label?: string;
  errormessage?: string;
  required?: boolean;
  key: string;
}
