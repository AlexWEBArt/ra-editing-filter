import { EDITING_ITEMS } from "./actions"

const editingItems = (dispatch) => (id, name, cost) => {
    dispatch({
        type: EDITING_ITEMS,
        payload: {
            id,
            name,
            cost,
        },
    })
}

export default editingItems;