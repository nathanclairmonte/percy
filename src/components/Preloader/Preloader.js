import React from "react";
import "./Preloader.css";

const Preloader = ({ load }) => {
    return <div id={load ? "preloader" : "preloader-none"}></div>;
};

export default Preloader;
