import { Kanban } from "./components/Kanban/Kanban";
import "./App.css";

function App() {
    return (
        <>
            <div style={{ padding: "50px" }}>
                <h1 style={{ marginBottom: "20px" }}>Kanban UI</h1>
                <Kanban />
            </div>
        </>
    );
}

export default App;
