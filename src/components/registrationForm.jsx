import { Field, Form, Formik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../redux/auth/operations";
import styles from "./componentsCss/registrationForm.module.css";

export default function RegistrationForm() {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Registration</h2>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: ""
        }}
        onSubmit={handleSubmit}
      >
        <Form className={styles.form}>
          <label className={styles.label}>
            Username:
            <Field
              className={styles.input}
              type="text"
              name="name"
              placeholder="Enter your name"
              autoComplete="off"
            />
          </label>

          <label className={styles.label}>
            Email:
            <Field
              className={styles.input}
              type="email"
              name="email"
              placeholder="Enter your email"
              autoComplete="off"
            />
          </label>

          <label className={styles.label}>
            Password:
            <div className={styles.passwordWrapper}>
              <Field
                className={styles.input}
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Create a password"
              />
              <button
                type="button"
                className={styles.toggleBtn}
                onClick={() => setShowPassword(prev => !prev)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </label>

          <button className={styles.submitBtn} type="submit">
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
}
