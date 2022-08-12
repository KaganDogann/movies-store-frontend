import { Field, Form, Formik } from "formik";
import { ChangeEvent, useState } from "react";
import { Button, FormGroup, FormLabel } from "react-bootstrap";
import { CustomBotton } from "../../components/CustomButton";
import { CustomForm } from "../../components/CustomForm";
import "./styles.scss";
export const SignUp: React.FC = () => {
  const initialValues = { email: "", password: "" };
  return (
    <div>
        <h1 style={{color:"white",marginLeft:"600px"}}>Kayıt Ol</h1>
        <div className="form-container-test">
        
      <Formik
        initialValues={initialValues}
        onSubmit={(value) => {
          //console.log("formik on submit:", value);
          console.log("test test on submit");
        }}
      >
        <Form className="form-group">
          <div className="form-input-container">
            <FormLabel className="form-label-test">E-Mail :</FormLabel>
            <Field className="form-control  form-input" name="email"></Field>
          </div>
          <div className="form-input-container">
            <FormLabel className="form-label-test form-label-margin ">
              Şifre :
            </FormLabel>
            <Field
              className="form-control form-input"
              name="password"
              type="password"
            ></Field>
          </div>

          <CustomBotton
            style={{ marginLeft: "88px", width: "400px" }}
            text="Kayıt Ol"
            variant="danger"
            type="submit"
          ></CustomBotton>
        </Form>
      </Formik>
    </div>
    </div>
    
  );
};
