import { useState, useEffect } from 'react'
import ContactList from './components/contactList'
import SearchBox from './components/searchBox'
import ContactForm from './components/contactForm'
import styles from './components/stylesForAllComponents.module.css'
import { useDispatch } from 'react-redux'
import { returnContacts } from './redux/contactsSlice'
import { useSelector } from 'react-redux'
import { filterContact } from './redux/filtersSlice'
import { fetchContacts } from './redux/contactsOps'
import toast, { Toaster } from 'react-hot-toast'
import { selectContacts, selectLoading,selectError } from './redux/contactsSlice'


export default function App() {
  const dispatch = useDispatch()

  const handleReset = () => {
    dispatch(returnContacts())
  }


  useEffect(() => {
    dispatch(fetchContacts()).unwrap()
      .then(() => {
        toast.success("Loading page....")
      })
      .catch(() => {
        toast.error("Page doesn`t working")
      })
  }, [dispatch])

  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  
  
  return (
    <div className={styles.container}>
      <h1>Phonebook</h1>
      <Toaster/>
      {error ? (
        <strong>Oops, page doesn`t working</strong>
      ) : (<ContactForm />
          
      )}
          {loading && <strong>Loading list...</strong>}
          <SearchBox/>
            {!loading && <ContactList />}
          <button onClick={handleReset}>return Contacts</button>
    </div>
  )
}


 