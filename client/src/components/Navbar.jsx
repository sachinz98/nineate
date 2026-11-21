
import { Github, Linkedin, Sun, Moon } from "lucide-react";

export default function Navbar({ theme, toggleTheme }) {
    return (
        <header className="navbar">
            <a href="#home" className="brand">
                nineate<span>.</span>
            </a>

            <nav className="nav-links">
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#experience">Experience</a>
                <a href="#contact">Contact</a>
            </nav>

            <div className="nav-actions">
                <a
                    href="https://github.com/sachinz98"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                >
                    <Github size={18} />
                </a>

                <a
                    href="https://linkedin.com/in/sachinz98"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                >
                    <Linkedin size={18} />
                </a>

                <button
                    className="theme-toggle"
                    onClick={toggleTheme}
                    aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
                >
                    {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
                </button>
            </div>
        </header>
    );
}
