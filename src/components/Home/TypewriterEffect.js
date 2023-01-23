import React from "react";
import Typewriter from "typewriter-effect";

const TypewriterEffect = () => {
    return (
        <Typewriter
            options={{
                strings: [
                    "Machine Learning Engineer",
                    "Web Developer",
                    "Machine Learning Researcher",
                    "App Developer",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
};

export default TypewriterEffect;
