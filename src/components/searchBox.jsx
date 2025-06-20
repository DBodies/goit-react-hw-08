import { useDispatch, useSelector } from "react-redux"
import { filterContact } from "../redux/filters/slice"
import { selectNameFilter } from "../redux/filters/selectors"
import styles from './componentsCss/searchBox.module.css'

export default function SearchBox() {
    const dispatch = useDispatch()
    const filter = useSelector(selectNameFilter)

    const handleChange = (e) => {
        dispatch(filterContact(e.target.value))
    }

    return (
        <div className={styles.wrapper}>
            <label className={styles.label}>Find contacts by name</label>
            <input
                className={styles.input}
                type="text"
                value={filter}
                onChange={handleChange}
                placeholder="Enter name..."
            />
        </div>
    )
}
