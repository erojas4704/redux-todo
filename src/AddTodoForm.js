import { useState } from "react";
import { useDispatch } from "react-redux";

const AddTodoForm = () => {
    const dispatch = useDispatch();
    const [form, setForm] = useState({ todo: '' });

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: "ADD", text: form.todo });
        setForm({ ...form, todo: '' });
    }

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="todo">Todo:</label>
            <input type="text" name="todo" id="todo" onChange={handleChange} value={form.todo} />
            <button type="submit">Add</button>
        </form>
    )
}

export default AddTodoForm;