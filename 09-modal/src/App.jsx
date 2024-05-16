import { useState } from "react";
import { Modal } from "./components/Moda";
import "./App.css";

function App() {
    const [openModal, setOpenModal] = useState(false);

    const showModal = ()=>{
      setOpenModal(!openModal)
    }

    return (
        <>
            <div>
              <button className="btn-open" onClick={showModal}>open Modal</button>
              <Modal openModal={openModal} showModal={showModal} ></Modal>
            </div>
        </>
    );
}

export default App;
