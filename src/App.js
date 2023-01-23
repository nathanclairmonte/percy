import React, { useEffect, useState } from "react";
import "./App.css";
import Preloader from "./components/Preloader";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Home/Home";
import "./allStyles.css";

function App() {
    const [load, setLoad] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoad(false);
        }, 1200);

        return () => clearTimeout(timer);
    }, []);

    return (
        <BrowserRouter>
            <Preloader load={load} />
            <div className="App" id={load ? "no-scroll" : "scroll"}>
                {/* Navbar */}
                {/* ScrollToTop */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
