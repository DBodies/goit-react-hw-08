import { useDispatch, useSelector } from "react-redux"
import { selectUser } from "../redux/auth/selectors"
import { logOut } from "../redux/auth/operations"
import styles from './componentsCss/userMenu.module.css'

export const UserMenu = () => {
    const dispatch = useDispatch()
    const user = useSelector(selectUser)

    return (
        <div className={styles.wrapper}>
            <p className={styles.text}>Welcome, {user.name}</p>
            <button className={styles.buttonLogOut} type="button" onClick={() => {
                dispatch(logOut())
            }}>Logout</button>
        </div>
    )
}