import { useState } from "react";
import {
    deleteTodo,
    editTodo,
    marcarTodo,
} from "../Logic/CRUD";

export const Todo = ({ todo }) => {
    const [newTitle, setNewTitle] = useState(todo.title);

    const handleClickEdit = () => {
        if (!todo.completed && newTitle) {
            editTodo(todo.id, newTitle);
        }
    };

    const handleClickMarcar = () => {
        marcarTodo(todo.id, todo.completed);
    };

    const handleOnChangeTitle = (e) => {
        if (!todo.completed) {
            setNewTitle(e.target.value);
        }
    };

    return (
        <div className="todo">
            <input
                className="list"
                type="text"
                value={newTitle}
                style={{
                    textDecoration: todo.completed && "line-through",
                }}
                onChange={handleOnChangeTitle}
            />

            <div>
                <button className="button-complete" onClick={handleClickMarcar}>
                    Marcar
                </button>
                <button onClick={handleClickEdit} className="button-edit">
                    Editar
                </button>
                <button
                    onClick={() => deleteTodo(todo.id)}
                    className="button-delete">
                    delete
                </button>
            </div>
        </div>
    );
};
