import { useDispatch} from "react-redux"
import { deleteContact } from "../redux/contactsOps"

export default function Contacts({ name, number,id }) {
    const dispatch = useDispatch()
     const handleDelete = () => {
        dispatch(deleteContact(id))
    }

    return (
        <>
            <p>{name}</p>
            <p>{number}</p>
            <button onClick={handleDelete}>Delete</button>
        </>
    )
}