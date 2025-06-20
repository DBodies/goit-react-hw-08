import { useSelector } from "react-redux"
import { selectFilteredContacts } from "../redux/contacts/slice"
import Contact from "./contact"
import styles from './componentsCss/contactList.module.css'

export default function ContactList() {
    const filteredContacts = useSelector(selectFilteredContacts)

    return (
        <ul className={styles.list}>
            {filteredContacts.map((phoneContact) => (
                <li key={phoneContact.id} className={styles.item}>
                    <Contact
                        id={phoneContact.id}
                        name={phoneContact.name}
                        number={phoneContact.number}
                    />
                </li>
            ))}
        </ul>
    )
}