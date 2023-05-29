import { ADDED_ITEM } from "./actions"

const addedItem = (dispatch) => (name, cost) => {
    dispatch({
        type: ADDED_ITEM,
        payload: {
            name,
            cost,
        },
    })
}

export default addedItem;