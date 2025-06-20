import { useDispatch } from "react-redux";
import { deleteContact } from "../redux/contacts/operations";
import styles from './componentsCss/contact.module.css';

export default function Contact({ id, name, number }) {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteContact(id));
    };

    return (
        <div className={styles.card}>
            <div>
                <p className={styles.name}>{name}</p>
                <p className={styles.number}>{number}</p>
            </div>
            <button className={styles.deleteButton} onClick={handleDelete}>Delete</button>
        </div>
    );
}
