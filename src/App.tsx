import React from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom";
import Panel from "./components/Panel";
import Access from "./components/Access";

function App() {
    return (
        <div className="App">
            <Panel/>
            <Routes>
                <Route path="/" element={<Access/>}></Route>
            </Routes>
        </div>
    );
}

export default App;
