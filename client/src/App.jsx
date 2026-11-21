
import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";

import {
    About,
    Projects,
    TechnicalStack,
    Experience,
    Education,
    Contact,
} from "./sections/PortfolioSections";

function App() {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((current) =>
            current === "light" ? "dark" : "light"
        );
    };

    return (
        <div className="site-wrapper" data-theme={theme}>
            <div className="container">
                <Navbar theme={theme} toggleTheme={toggleTheme} />

                <main>
                    <Hero />
                    <About />
                    <Projects />
                    <TechnicalStack />
                    <Experience />
                    <Education />
                    <Contact />
                </main>
            </div>
        </div>
    );
}

export default App;
