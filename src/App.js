import React, { useEffect, useState } from "react";
import "./App.css";
import Preloader from "./components/Preloader/Preloader";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./allStyles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home";
import NavigationBar from "./components/Navbar/NavigationBar";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";

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
                <NavigationBar />
                {/* ScrollToTop */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
