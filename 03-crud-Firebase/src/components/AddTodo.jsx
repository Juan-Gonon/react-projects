import { useState } from "react";
import { Insert } from "../Logic/CRUD";


export const AddTodo = () => {
    const [title, setTitle] = useState("");

    const Insertar = (e) => {
        e.preventDefault();

        if (title != "") {
            Insert(title);
            setTitle("");
        }
    };

    return (
        <form onSubmit={Insertar}>
            <div className="input_container">
                <input
                    className="txtTodo"
                    type="text"
                    placeholder="Ingresar tarea..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="btn_container">
                <input type="submit" value="Insertar" />
            </div>
        </form>
    );
};
