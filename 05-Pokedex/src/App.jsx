import { useState } from "react";
import { TopBar } from "./components/TopBar/TopBar";
import { PokeList } from "./components/PokeList/PokeList";
import { BottomBar } from "./components/BottomBar/BottomBar";

import "./App.css";

function App() {
    return (
        <>
            <TopBar></TopBar>
            <PokeList></PokeList>
            <BottomBar></BottomBar>
        </>
    );
}

export default App;
