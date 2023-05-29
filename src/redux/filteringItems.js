import { FILTERING_ITEMS } from "./actions"

const filteringItems = (dispatch) => (filterName) => {
    dispatch({
        type: FILTERING_ITEMS,
        payload: filterName,
    })
}

export default filteringItems;