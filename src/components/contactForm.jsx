import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik"
import { nanoid } from "nanoid";
import * as Yup from "yup";
import { addContact } from "../redux/contacts/operations";
import styles from './componentsCss/contactForm.module.css'

export default function ContactForm() {

    const FeedbackSchema = Yup.object().shape({
        name: Yup.string().min(3, "Too short!").max(30, "Too long!").required("Required"),
        number: Yup.string().min(3, "Too short!").max(12, "Too long!").required("Required")
    });

    const dispatch = useDispatch();

    const initialValues = {
        name: "",
        number: ""
    };

    const handleSubmit = (values, actions) => {
        dispatch(addContact({
            name: values.name,
            number: values.number,
            id: nanoid()
        }));
        actions.resetForm();
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={FeedbackSchema}
        >
            <Form className={styles.form}>
                <label htmlFor="name" className={styles.label}>Name</label>
                <Field className={styles.input} type="text" name="name" />
                <ErrorMessage name="name" component="span" className={styles.error} />

                <label htmlFor="number" className={styles.label}>Number</label>
                <Field className={styles.input} type="text" name="number" />
                <ErrorMessage name="number" component="span" className={styles.error} />

                <button className={styles.button} type="submit">Add contact</button>
            </Form>
        </Formik>
    )
}
