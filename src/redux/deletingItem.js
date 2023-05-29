import { DELETING_ITEM } from "./actions"

const deletingItem = (dispatch) => (id) => {
    dispatch({
        type: DELETING_ITEM,
        payload: id,
    })
}

export default deletingItem;