import { Field, Form, Formik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/auth/operations";
import styles from './componentsCss/loginForm.module.css';

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Login</h2>
      <Formik initialValues={{ email: "", password: "" }} onSubmit={handleSubmit}>
        <Form className={styles.form}>
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
                placeholder="Enter your password"
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

          <button className={styles.submitBtn} type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  );
}
