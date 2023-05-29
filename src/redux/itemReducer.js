import { ADDED_ITEM, EDITING_ITEMS, DELETING_ITEM, FILTERING_ITEMS, SET_ITEM_ID, SET_USER_COST, SET_USER_NAME, SET_USER_FILTER } from "./actions"
import shortid from "shortid";

const initialState = {
    items: [],
    filterItems: [],
    itemId: null,
    userFilter: '',
    userName: '',
    userCost: 0,
};

const itemReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDED_ITEM:
            return {
                ...state,
                items: [...state.items, {id: shortid.generate(), name: state.userName, cost: state.userCost}],
            }
        case EDITING_ITEMS:
            state.items.map(item => {
                if(item.id === state.itemId) {
                    item.name = state.userName;
                    item.cost = state.userCost;
                }
                return item
            });
            return state
        case DELETING_ITEM:
            const remainingItems = state.items.filter(item => item.id !== action.payload);
            const remainingFilterItems = state.filterItems.filter(item => item.id !== action.payload);
            if (remainingItems.length < 2) {
                return {
                    ...state,
                    items: remainingItems,
                    filterItems: remainingFilterItems,
                    itemId: null,
                    userFilter: '',
                    userName: '',
                    userCost: 0,
                }
            }
            return {
                ...state,
                items: remainingItems,
                filterItems: remainingFilterItems,
                itemId: null,
                userName: '',
                userCost: 0,
            }
        case FILTERING_ITEMS:
            state.items.forEach(item => {
                const lengthFilter = state.userFilter.length;
                if(item.name.slice(0, lengthFilter).toLowerCase() === state.userFilter.toLowerCase() && !state.filterItems.includes(item)) {
                    state.filterItems.push(item)
                }
                if(item.name.slice(0, lengthFilter).toLowerCase() !== state.userFilter.toLowerCase() && state.filterItems.includes(item)) {
                    state.filterItems = state.filterItems.filter(filterItem => filterItem !== item)
                }
            });
            return state
        case SET_ITEM_ID:
            return {
                ...state,
                itemId: action.payload,
            }
        case SET_USER_NAME:
            return {
                ...state,
                userName: action.payload,
            }
        case SET_USER_COST:
            return {
                ...state,
                userCost: action.payload,
            }
        case SET_USER_FILTER:
            return {
                ...state,
                userFilter: action.payload,
            }
        default:
            return state;
    }
};

export default itemReducer