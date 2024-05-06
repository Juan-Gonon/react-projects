import { AddTodo } from "./components/AddTodo";
import { Title } from "./components/Title";
import "./App.css";
import { useEffect, useState } from "react";
import { Todo } from "./components/Todo";
import { subscribeToTodos } from "./Logic/CRUD";

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const unSub = subscribeToTodos(setData);

        return () => unSub();
    }, []);

    return (
        <>
            <div className="App">
                <div>
                    <Title></Title>
                </div>
                <div>
                    <AddTodo></AddTodo>
                </div>
                <div className="todo__container">
                    {data?.map((item) => (
                        <Todo key={item.id} todo={item} ></Todo>
                    ))}
                </div>
            </div>
        </>
    );
}

export default App;
