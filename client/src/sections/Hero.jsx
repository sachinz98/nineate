
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="hero" id="home">
            <div className="hero-topline">
                <span>SOFTWARE ENGINEERING / APPLICATION SECURITY</span>
                <span>BASED IN INDIA</span>
            </div>

            <div className="hero-content">
                <div className="hero-intro">
          <span className="eyebrow">
            <span className="status-dot" />
            OPEN TO OPPORTUNITIES
          </span>

                    <h1>
                        Hi, I'm Sachin.
                        <br />
                        I build things
                        <br />
                        <span className="muted-heading">
              for the web<span className="accent">.</span>
            </span>
                    </h1>

                    <p className="hero-description">
                        A developer interested in backend engineering, distributed
                        systems, and application security. I enjoy understanding
                        how things work under the hood and building useful software.
                    </p>

                    <div className="hero-actions">
                        <a href="#projects" className="button-primary">
                            Explore my work
                            <ArrowUpRight size={16} />
                        </a>

                        <a href="#contact" className="button-secondary">
                            Get in touch
                            <ArrowDownRight size={16} />
                        </a>
                    </div>
                </div>

                <div className="hero-index">
                    <span className="index-number">01 / 08</span>
                    <span className="index-label">INTRODUCTION</span>
                    <div className="index-line" />
                    <span className="index-note">
            Curious by nature.
            <br />
            Engineering by choice.
          </span>
                </div>
            </div>

            <div className="hero-bottom">
                <span>JAVA · SPRING BOOT · SECURITY</span>
                <a href="#about">
                    SCROLL TO EXPLORE <ArrowDownRight size={14} />
                </a>
            </div>
        </section>
    );
}
