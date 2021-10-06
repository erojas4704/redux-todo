import { useSelector } from "react-redux";
import AddTodoForm from "./AddTodoForm";
import ListItem from "./ListItem";

const TodoList = () => {
    const list = useSelector(store => store);

    return (
        <>
            <AddTodoForm />
            {list.map(item => <ListItem key={item.id} item={item} />)}
        </>
    )
}

export default TodoList;