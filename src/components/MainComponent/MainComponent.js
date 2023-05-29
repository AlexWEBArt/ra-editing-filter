import Filter from "../Filter/Filter";
import FormInput from "../FormInput/FormInput";
import ListElements from "../ListElements/ListElements";
import { useSelector } from "react-redux";


export default function MainComponent() {
    const { items } = useSelector((state => state.editingApp))
    return (
        <div className="main-component">
            <FormInput />

            {items[1] && <Filter />}
            {items[0] && <ListElements />}
        </div>
    )
}