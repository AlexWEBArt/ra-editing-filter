import { useDispatch, useSelector } from "react-redux";
import { SET_ITEM_ID, SET_USER_COST, SET_USER_NAME } from "../../redux/actions"
import addedItem from "../../redux/addedItem";
import editingItems from "../../redux/editingItems";


export default function FormInput() {
    const dispatch = useDispatch();
    const { itemId, userName, userCost } = useSelector((state => state.editingApp))

    const handleClickCancel = () => {
        dispatch({
            type: SET_ITEM_ID,
            payload: null,
        })
        dispatch({
            type: SET_USER_NAME,
            payload: '',
        })
        dispatch({
            type: SET_USER_COST,
            payload: 0,
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (itemId) {
            editingItems(dispatch)(itemId, userName, userCost)
        }
        if (!itemId) {
            addedItem(dispatch)(userName, userCost)
        }
        
        handleClickCancel()
    }

    const handleChange = (e) => {
        let type
        if (e.target.name === 'name') {
            type = SET_USER_NAME
        }
        if (e.target.name === 'cost') {
            type = SET_USER_COST
        }

        dispatch({
            type,
            payload: e.target.value,
        })
    };

    return (
        <form className="adding-form" onSubmit={handleSubmit}>
            <input className="input-name" name="name" type="text" value={userName} required onChange={handleChange}></input>
            <input className="input-cost" name="cost" type="number" value={userCost} required onChange={handleChange}></input>
            <button className="btn btn-save">Save</button>
            {itemId && <button className="btn btn-cancel" onClick={handleClickCancel}>Cancel</button>}
        </form>
    )
}