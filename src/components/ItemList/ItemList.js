import { SET_ITEM_ID, SET_USER_COST, SET_USER_NAME } from "../../redux/actions"
import { useDispatch } from "react-redux"
import deletingItem from "../../redux/deletingItem";


export default function ItemList(props) {
    const {id, name, cost} = props.item
    const dispatch = useDispatch();

    const handleClickEdit = () => {
        dispatch({
            type: SET_ITEM_ID,
            payload: id,
        })
        dispatch({
            type: SET_USER_NAME,
            payload: name,
        })
        dispatch({
            type: SET_USER_COST,
            payload: cost,
        })
    }

    const handleClickDelete = () => {
        deletingItem(dispatch)(id);
    }

    
    return (
        <li className="item-list" data-id={id}>
            <p className="item-name">{name}</p>
            <p className="item-cost">{cost}</p>
            <div className="item-action">
                <button className="btn btn-edit" onClick={handleClickEdit}>&#9998;</button>
                <button className="btn btn-delete" onClick={handleClickDelete}>&#10006;</button>
            </div>
        </li>
    )
}