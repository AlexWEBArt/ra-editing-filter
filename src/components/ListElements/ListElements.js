import ItemList from "../ItemList/ItemList"
import { useSelector } from "react-redux";

export default function ListElements() {
    const { items, filterItems, userFilter } = useSelector((state => state.editingApp))

    return (
        <ul className="list-container">
            {
                userFilter.length > 0
                ? 
                filterItems.map(item => <ItemList key={item.id} item={item}/>)
                :
                items.map(item => <ItemList key={item.id} item={item}/>)
            }
        </ul>
    )
}