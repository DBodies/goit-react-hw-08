import { useSelector } from "react-redux";
import Contacts from "./contacts";
import {selectFilteredContacts} from '../redux/contactsSlice'

export default function ContactList() {
    const filteredContacts = useSelector(selectFilteredContacts);


    return (
        <ul>
            {filteredContacts.map((phoneContact) => (
                <li key={phoneContact.id}>
                    <Contacts
                        id={phoneContact.id}
                        name={phoneContact.name}
                        number={phoneContact.number} />
                </li>
            ))}
        </ul>
    )
}