import { useDispatch } from "react-redux";

const ListItem = ({ item }) => {
    const dispatch = useDispatch();
    
    const handleDelete = () => {
        dispatch({ type: "REMOVE", id: item.id });
    }

    return (
        <div>
            {item.text}
            <button className="btn-delete" onClick={handleDelete}>X</button>
        </div>
    )
}

export default ListItem;