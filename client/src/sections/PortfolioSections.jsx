
import {
    ArrowUpRight,
    Github,
    ExternalLink,
    Mail,
} from "lucide-react";

const projects = [
    {
        name: "TinyLink",
        category: "FULL-STACK DEVELOPMENT",
        description:
            "A URL shortener supporting custom aliases, HTTP 302 redirection and one-click clipboard copying.",
        details:
            "Built REST APIs with Spring Boot and Spring Data JPA, using Jakarta Bean Validation and indexed PostgreSQL schema design.",
        stack: ["Java", "Spring Boot", "React", "PostgreSQL", "Docker"],
        github: "https://github.com/sachinz98/tinylink",
        number: "01",
    },
    {
        name: "GitTree",
        category: "DEVELOPER TOOLING",
        description:
            "A web utility that explores and dynamically renders nested directory structures of public GitHub repositories.",
        details:
            "Integrated the GitHub REST API and implemented automated Markdown formatting with structured REST endpoints.",
        stack: ["Java", "Spring Boot", "React", "GitHub API", "Docker"],
        github: "https://github.com/sachinz98/gittree",
        number: "02",
    },
    {
        name: "Zgpt",
        category: "PYTHON / CLI",
        description:
            "A Python command-line tool that lets developers query Google's Gemini API directly from the terminal.",
        details:
            "Published on PyPI with local API credential management through initialization and revocation commands.",
        stack: ["Python", "Gemini API", "CLI", "PyPI", "setuptools"],
        github: "https://github.com/sachinz98/zgpt",
        package: "https://pypi.org/project/zgpt/",
        number: "03",
    },
];

const skillGroups = [
    {
        title: "Languages",
        items: ["Java", "C++", "Python", "JavaScript", "SQL", "Bash"],
    },
    {
        title: "Backend & Databases",
        items: [
            "Spring Boot",
            "Spring Data JPA",
            "REST APIs",
            "PostgreSQL",
            "MySQL",
        ],
    },
    {
        title: "Frontend & Tools",
        items: [
            "React",
            "HTML",
            "CSS",
            "Git",
            "Postman",
            "Docker",
        ],
    },
    {
        title: "Security & Cloud",
        items: [
            "OWASP Top 10",
            "API Security",
            "Burp Suite",
            "Kali Linux",
            "GCP Fundamentals",
            "CI/CD Fundamentals",
        ],
    },
    {
        title: "Computer Science",
        items: [
            "DSA",
            "OOP",
            "DBMS",
            "Operating Systems",
            "Computer Networks",
        ],
    },
];

function SectionHeading({ number, label, title }) {
    return (
        <div className="section-heading">
      <span className="section-kicker">
        {number} / {label}
      </span>
            <h2>{title}</h2>
        </div>
    );
}

export function About() {
    return (
        <section className="content-section" id="about">
            <SectionHeading
                number="01"
                label="ABOUT"
                title="A little about what I do."
            />

            <div className="about-grid">
                <div className="about-copy">
                    <p className="about-lead">
                        Interested in how software works, from the
                        application layer down to the underlying systems.
                    </p>

                    <p>
                        I'm Sachin, a developer focused on backend engineering
                        and application security. I enjoy building practical
                        developer tools, working with APIs and understanding
                        the engineering decisions behind reliable software.
                    </p>

                    <p>
                        Currently exploring the Java ecosystem, cloud
                        infrastructure and web application security.
                    </p>
                </div>

                <div className="about-aside">
                    <span className="aside-label">CURRENT INTERESTS</span>
                    <span>Backend Engineering</span>
                    <span>Application Security</span>
                    <span>Cloud Infrastructure</span>
                    <span>Developer Tooling</span>
                    <span>Systems & Networking</span>
                    <div className="ctf-note">
                        <span className="aside-label">SECURITY PRACTICE</span>
                        Hacker101 CTF — completed security modules
                        and web vulnerability challenges.
                    </div>
                </div>
            </div>
        </section>
    );
}

export function Projects() {
    return (
        <section className="content-section" id="projects">
            <SectionHeading
                number="02"
                label="SELECTED WORK"
                title="Things I've built."
            />

            <div className="projects-list">
                {projects.map((project) => (
                    <article className="project-card" key={project.name}>
                        <div className="project-number">
                            {project.number}
                        </div>

                        <div className="project-main">
              <span className="project-category">
                {project.category}
              </span>

                            <h3>{project.name}</h3>

                            <p>{project.description}</p>

                            <p className="project-details">
                                {project.details}
                            </p>

                            <div className="tech-list">
                                {project.stack.map((tech) => (
                                    <span key={tech}>{tech}</span>
                                ))}
                            </div>
                        </div>

                        <div className="project-links">
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={`${project.name} on GitHub`}
                            >
                                <Github size={17} />
                            </a>

                            {project.package && (
                                <a
                                    href={project.package}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="View Zgpt on PyPI"
                                >
                                    <ExternalLink size={17} />
                                </a>
                            )}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

export function TechnicalStack() {
    return (
        <section className="content-section" id="stack">
            <SectionHeading
                number="03"
                label="TECHNICAL ARSENAL"
                title="Tools of the trade."
            />

            <div className="skills-grid">
                {skillGroups.map((group) => (
                    <div className="skill-group" key={group.title}>
                        <h3>{group.title}</h3>
                        <div className="tech-list">
                            {group.items.map((item) => (
                                <span key={item}>{item}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export function Experience() {
    return (
        <section className="content-section" id="experience">
            <SectionHeading
                number="04"
                label="EXPERIENCE"
                title="Where I've worked."
            />

            <article className="timeline-item">
                <div className="timeline-date">
                    MAY 2025 — JUN 2025
                </div>

                <div className="timeline-content">
                    <h3>Research Intern</h3>
                    <span className="timeline-company">
            Pt. Ravishankar Shukla University (PRSU)
          </span>
                    <span className="timeline-role">
            Computational Data Analysis
          </span>

                    <ul>
                        <li>
                            Cleaned, structured and analyzed physicochemical
                            and molecular datasets using Python, Pandas and NumPy.
                        </li>
                        <li>
                            Tracked AutoDock Vina simulation runs and automated
                            output reporting with Matplotlib.
                        </li>
                        <li>
                            Diagnosed workflow errors and reduced manual
                            data processing overhead.
                        </li>
                    </ul>

                    <div className="tech-list">
                        {["Python", "Pandas", "NumPy", "Matplotlib"].map(
                            (tech) => <span key={tech}>{tech}</span>
                        )}
                    </div>
                </div>
            </article>
        </section>
    );
}

export function Education() {
    return (
        <section className="content-section" id="education">
            <SectionHeading
                number="05"
                label="EDUCATION"
                title="Academic background."
            />

            <div className="education-row">
                <div>
                    <h3>National Institute of Technology, Raipur</h3>
                    <p>B.Tech — Biotechnology</p>
                </div>
                <div className="education-meta">
                    <span>2022 — 2026</span>
                    <span>CPI: 7.39 / 10</span>
                </div>
            </div>
        </section>
    );
}

export function Contact() {
    return (
        <section className="content-section contact-section" id="contact">
            <SectionHeading
                number="06"
                label="CONTACT"
                title="Let's connect."
            />

            <div className="contact-content">
                <p>
                    Interested in software engineering, backend systems
                    or application security? I'd be glad to connect.
                </p>

                <a
                    className="button-primary"
                    href="mailto:sachinza98@gmail.com"
                >
                    <Mail size={17} />
                    Get in touch
                    <ArrowUpRight size={16} />
                </a>
            </div>

            <footer className="site-footer">
                <span>© {new Date().getFullYear()} Sachin Zade</span>
                <span>Built with React · Hosted on GitHub Pages</span>
                <a
                    href="https://github.com/sachinz98"
                    target="_blank"
                    rel="noreferrer"
                >
                    GitHub <ArrowUpRight size={13} />
                </a>
            </footer>
        </section>
    );
}
