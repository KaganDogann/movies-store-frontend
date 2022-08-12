import { useRef, useState } from "react";
import { Form, FormControl } from "react-bootstrap";
import { CustomBotton } from "../CustomButton";
import { CustomFormProps } from "./types";
import "./styles.scss"

export const CustomForm: React.FC<CustomFormProps> = ({
  title,
  onSubmit,
  items,
  buttonText,
  disabled,
}) => {
  const [isValid, setIsValid] = useState(true);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = () => {
    const form = formRef.current;
    if (form?.checkValidity() === false) {
      return setIsValid(false);
    }
    setIsValid(true);
    onSubmit();
  };
  return (
    <Form
      ref={formRef}
      className="form-container"
      validated={!isValid}
      noValidate
    >
      <h2 className="form-title">{title}</h2>
      {items.map((itemProps) => (
        <Form.Group key={itemProps.key}>
          {!!itemProps.label && <Form.Label>{itemProps.label}</Form.Label>}
          <FormControl
            {...itemProps}
            required={itemProps.required}
          ></FormControl>
          {!!itemProps.errormessage && (
            <Form.Control.Feedback type="invalid">
              {itemProps.errormessage}
            </Form.Control.Feedback>
          )}
        </Form.Group>
      ))}
      <CustomBotton
        className="submit-button"
        variant="success"
        text={buttonText || "SUBMIT"}
        onClick={handleSubmit}
        disabled={disabled}
      />
    </Form>
  );
};
