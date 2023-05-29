import { useDispatch, useSelector } from "react-redux"
import { SET_USER_FILTER } from "../../redux/actions"
import filteringItems from "../../redux/filteringItems";

export default function Filter() {
    const dispatch = useDispatch();
    const { userFilter } = useSelector((state => state.editingApp))

    const handleChangeFilter = (e) => {
        dispatch({
            type: SET_USER_FILTER,
            payload: e.target.value,
        })
        
        filteringItems(dispatch)(e.target.value)
    }

    return (
        <input className="input-filter" name="filter" type="text" value={userFilter} onChange={handleChangeFilter}></input>
    )
}