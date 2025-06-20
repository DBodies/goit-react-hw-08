import { useDispatch } from "react-redux"
import ContactList from "../components/contactList"
import { useEffect } from "react"
import { fetchContacts } from "../redux/contacts/operations"
import ContactForm from "../components/contactForm"
import SearchBox from "../components/searchBox"
import styles from '../components/componentsCss/contacts.module.css'

export default function ContactsPage() {
  const dispatch = useDispatch()
  useEffect(() => {
  dispatch(fetchContacts())
},[dispatch])

    return (
      <div className={styles.wrapper}>
        <SearchBox/>
        <ContactList />
        <ContactForm />
      </div>
    )
  }