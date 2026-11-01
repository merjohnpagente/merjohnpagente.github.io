import { useEffect, useState } from 'react'
import scriptRaw from './script.js?raw'
import ProjectPage, { MissingProject } from './ProjectPage.jsx'
import { ArrowRightIcon } from './icons.jsx'
import { getProject } from './projects.js'

function getProjectId(hash) {
  const match = hash.match(/^#\/project\/([^/?#]+)/)
  return match ? decodeURIComponent(match[1]) : null
}

function App() {
  const [hash, setHash] = useState(() => window.location.hash)
  const projectId = getProjectId(hash)
  const project = projectId ? getProject(projectId) : null

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useEffect(() => {
    if (project) {
      document.title = `${project.title} | Merjohn Pagente`
      window.scrollTo(0, 0)
      return
    }

    document.title = 'Merjohn Pagente | Web Developer'

    if (hash && !hash.startsWith('#/')) {
      const target = document.getElementById(hash.slice(1))
      if (target) {
        requestAnimationFrame(() => target.scrollIntoView())
      }
    }
  }, [hash, project])

  useEffect(() => {
    const s = document.createElement('script')
    s.textContent = scriptRaw
    document.body.appendChild(s)
    return () => {
      if (s.parentNode) s.parentNode.removeChild(s)
    }
  }, [])
  return (
    <>
<div className="bg-fx" aria-hidden="true">
        <svg className="bg-fx__svg" viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <filter id="bgBlur" x="-60%" y="-60%" width="220%" height="220%">
                    <feGaussianBlur stdDeviation="70"/>
                </filter>
                <radialGradient id="bgGradGold" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stop-color="#f4913f" stop-opacity="0.5"/>
                    <stop offset="100%" stop-color="#f4913f" stop-opacity="0"/>
                </radialGradient>
                <radialGradient id="bgGradOrange" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stop-color="#d1621f" stop-opacity="0.45"/>
                    <stop offset="100%" stop-color="#d1621f" stop-opacity="0"/>
                </radialGradient>
                <radialGradient id="bgGradCyan" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stop-color="#00d9ff" stop-opacity="0.3"/>
                    <stop offset="100%" stop-color="#00d9ff" stop-opacity="0"/>
                </radialGradient>
            </defs>
            <g className="bg-fx__blob bg-fx__blob--1" filter="url(#bgBlur)">
                <path fill="url(#bgGradGold)">
                    <animate attributeName="d" dur="24s" repeatCount="indefinite"
                        values="M300,120 C420,60 560,90 610,200 C660,310 600,430 480,470 C360,510 220,470 170,360 C120,250 180,180 300,120 Z;
                                M330,150 C470,70 590,150 605,260 C620,370 530,460 410,480 C290,500 190,430 175,320 C160,210 190,230 330,150 Z;
                                M280,100 C400,40 540,110 590,220 C640,330 590,450 460,490 C330,530 210,460 160,350 C110,240 160,160 280,100 Z;
                                M300,120 C420,60 560,90 610,130 C660,310 600,430 480,470 C360,510 220,470 170,360 C120,250 180,180 300,120 Z"/>
                </path>
            </g>
            <g className="bg-fx__blob bg-fx__blob--2" filter="url(#bgBlur)">
                <path fill="url(#bgGradOrange)">
                    <animate attributeName="d" dur="30s" repeatCount="indefinite"
                        values="M1150,420 C1280,360 1420,410 1460,530 C1500,650 1420,760 1290,790 C1160,820 1040,750 1010,630 C980,510 1020,480 1150,420 Z;
                                M1180,450 C1320,400 1440,470 1450,580 C1460,690 1360,770 1240,790 C1120,810 1020,730 1010,620 C1000,510 1040,500 1180,450 Z;
                                M1120,400 C1260,330 1400,400 1450,520 C1480,620 1440,760 1300,800 C1160,840 1030,760 1080,640 C970,520 980,470 1120,400 Z;
                                M1150,420 C1380,360 1420,410 1460,530 C1500,650 1420,760 1290,790 C1160,790 1040,750 1010,630 C980,520 1020,480 1150,420 Z"/>
                </path>
            </g>
            <g className="bg-fx__blob bg-fx__blob--3" filter="url(#bgBlur)">
                <path fill="url(#bgGradCyan)">
                    <animate attributeName="d" dur="36s" repeatCount="indefinite"
                        values="M450,650 C580,600 700,660 730,770 C760,880 680,970 550,990 C420,1010 310,940 290,830 C270,720 320,700 450,650 Z;
                                M480,680 C610,610 720,690 730,790 C740,860 640,920 520,980 C400,960 300,910 310,810 C280,710 380,690 480,680 Z;
                                M420,620 C560,560 670,630 730,740 C770,850 700,960 560,1000 C540,980 400,960 300,840 C260,720 300,680 420,620 Z;
                                M450,630 C580,600 700,660 730,770 C780,880 700,950 550,980 C460,980 350,940 320,830 C350,720 420,700 450,630 Z"/>
                </path>
            </g>
            <g className="bg-fx__mesh bg-fx__mesh--1">
                <line x1="200" y1="150" x2="500" y2="80"/><line x1="500" y1="80" x2="850" y2="180"/>
                <line x1="850" y1="180" x2="1200" y2="120"/><line x1="1200" y1="120" x2="1450" y2="300"/>
                <line x1="200" y1="150" x2="150" y2="500"/><line x1="500" y1="80" x2="600" y2="450"/>
                <line x1="850" y1="180" x2="600" y2="450"/><line x1="850" y1="180" x2="950" y2="520"/>
                <line x1="1200" y1="120" x2="950" y2="520"/><line x1="1200" y1="120" x2="1300" y2="600"/>
                <line x1="1450" y1="300" x2="1300" y2="600"/><line x1="150" y1="500" x2="600" y2="450"/>
                <line x1="600" y1="450" x2="950" y2="520"/><line x1="950" y1="520" x2="1300" y2="600"/>
                <line x1="150" y1="500" x2="300" y2="800"/><line x1="600" y1="450" x2="300" y2="800"/>
                <line x1="600" y1="450" x2="700" y2="850"/><line x1="950" y1="520" x2="700" y2="850"/>
                <line x1="950" y1="520" x2="1100" y2="780"/><line x1="1300" y1="600" x2="1100" y2="780"/>
                <line x1="1300" y1="600" x2="1400" y2="900"/><line x1="300" y1="800" x2="700" y2="850"/>
                <line x1="700" y1="850" x2="1100" y2="780"/><line x1="1100" y1="780" x2="1400" y2="900"/>
                <circle cx="200" cy="150" r="5"/><circle cx="500" cy="80" r="5"/><circle cx="850" cy="180" r="5"/>
                <circle cx="1200" cy="120" r="5"/><circle cx="1450" cy="300" r="5"/><circle cx="150" cy="500" r="5"/>
                <circle cx="600" cy="450" r="6"/><circle cx="950" cy="520" r="6"/><circle cx="1300" cy="600" r="5"/>
                <circle cx="300" cy="800" r="5"/><circle cx="700" cy="850" r="5"/><circle cx="1100" cy="780" r="5"/>
                <circle cx="1400" cy="900" r="5"/>
            </g>
            <g className="bg-fx__mesh bg-fx__mesh--2">
                <polygon points="1250,650 1400,700 1430,850 1320,950 1170,900 1140,750"/>
                <polygon points="1250,650 1320,730 1290,830 1190,830 1160,730"/>
            </g>
        </svg>
    </div>

    <div className="progress-bar" aria-hidden="true"><span id="progressFill"></span></div>

    <a className="skip-link" href="#main">Skip to content</a>

    <header className="site-header">
        <div className="header-inner">
            <a href="#top" className="wordmark">MERJOHN<span>PAGENTE</span></a>
            <nav className="site-nav" aria-label="Primary">
                <a href="#top">Home</a>
                <a href="#about">About</a>

                {/* Dropdown menu (Vanilla JS - see script.js) */}
                <div className="nav-dropdown">
                    <button type="button" className="nav-dropdown__toggle" id="workMenuBtn"
                            aria-haspopup="true" aria-expanded="false" aria-controls="workMenu">
                        My Work
                        <svg className="nav-dropdown__caret" viewBox="0 0 10 6" aria-hidden="true">
                            <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.4"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                    <ul className="nav-dropdown__menu" id="workMenu" role="menu" aria-labelledby="workMenuBtn">
                        <li role="none"><a role="menuitem" href="#work">Projects</a></li>
                        <li role="none"><a role="menuitem" href="#skills">Skills</a></li>
                        <li role="none"><a role="menuitem" href="#stats">By the Numbers</a></li>
                        <li role="none"><a role="menuitem" href="assets/resume.pdf" target="_blank" rel="noopener">Resume (PDF)</a></li>
                    </ul>
                </div>

                <a href="#connect">Contact</a>
            </nav>
            <div className="header-social" aria-label="Social links">
                <a href="https://github.com/MerjohnPagente" target="_blank" rel="noopener" aria-label="GitHub">GH</a>
                <a href="https://www.linkedin.com/in/merjohn-pagente-216775448" target="_blank" rel="noopener" aria-label="LinkedIn">IN</a>
                <a href="https://web.facebook.com/Mjhnnjhn" target="_blank" rel="noopener" aria-label="Facebook">FB</a>
                <a href="mailto:merjohnpagente2004@gmail.com" aria-label="Email">EM</a>
            </div>
            <input type="checkbox" id="menuToggle" className="menu-toggle-input" />
            <label htmlFor="menuToggle" className="menu-toggle" aria-label="Open menu">
                <span></span><span></span><span></span>
            </label>
        </div>
        <nav className="mobile-nav" id="mobileNav" aria-label="Mobile">
            <a href="#top">Home</a>
            <a href="#about">About</a>

            {/* Same dropdown component, stacked for mobile */}
            <div className="nav-dropdown nav-dropdown--mobile">
                <button type="button" className="nav-dropdown__toggle" id="workMenuBtnMobile"
                        aria-haspopup="true" aria-expanded="false" aria-controls="workMenuMobile">
                    My Work
                    <svg className="nav-dropdown__caret" viewBox="0 0 10 6" aria-hidden="true">
                        <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.4"
                              strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                <ul className="nav-dropdown__menu" id="workMenuMobile" role="menu" aria-labelledby="workMenuBtnMobile">
                    <li role="none"><a role="menuitem" href="#work">Projects</a></li>
                    <li role="none"><a role="menuitem" href="#skills">Skills</a></li>
                    <li role="none"><a role="menuitem" href="#stats">By the Numbers</a></li>
                    <li role="none"><a role="menuitem" href="assets/resume.pdf" target="_blank" rel="noopener">Resume (PDF)</a></li>
                </ul>
            </div>

            <a href="#connect">Contact</a>
        </nav>
    </header>

    <main id="main">
    {projectId ? (
        project ? <ProjectPage project={project} /> : <MissingProject />
    ) : (
        <>

        {/* HERO */}
        <section className="hero" id="top">
            <div className="hero-grid" aria-hidden="true"></div>
            <div className="hero-type" aria-hidden="true">
                <div className="hero-line">WELCOME</div>
                <div className="hero-line">TO MY</div>
                <div className="hero-line hero-line--accent hero-line--long">PORTFOLIO</div>
            </div>
            <h1 className="sr-only">Merjohn Pagente — Web Developer & Designer</h1>

            <div className="hero-figure-wrap">
                <img className="hero-figure" src="assets/hero.png" alt="Merjohn Pagente" fetchPriority="high" />
            </div>

            <div className="hero-glow" aria-hidden="true"></div>
            <p className="hero-sub">Web Developer · UI/UX Designer · BSCS Student</p>
            <div className="hero-brand">
                <span className="hero-brand__name">Merjohn Pagente</span>
                <span className="hero-brand__tag">I Build. I Design. I Deliver.</span>
                <span className="hero-swatches" aria-hidden="true"><i></i><i></i><i></i><i></i></span>
                <div className="hero-actions">
                    <a href="#connect" className="btn-resume btn-resume--solid" aria-label="Hire Merjohn">
                        <span className="btn-resume__label">Hire Me</span>
                        <svg className="btn-resume__arrow" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17L17 7"/><path d="M8 7h9v9"/></svg>
                    </a>
                </div>
            </div>
            {/* hero spark removed */}
            <span className="hero-plus hero-plus--1" aria-hidden="true">+</span>
            <span className="hero-plus hero-plus--2" aria-hidden="true">+</span>
            <div className="scroll-cue" aria-hidden="true"><span></span>Scroll</div>
        </section>

        {/* STATEMENT / MARQUEE */}
        <section className="statement" aria-label="Positioning statement">
            <div className="marquee" aria-hidden="true">
                <div className="marquee__track">
                    <span>HTML5</span><span>·</span><span>CSS3</span><span>·</span>
                    <span>JavaScript</span><span>·</span><span>Responsive Design</span><span>·</span>
                    <span>UI/UX</span><span>·</span><span>Git & GitHub</span><span>·</span>
                    <span>Web APIs</span><span>·</span><span>Front-End</span><span>·</span>
                    <span>HTML5</span><span>·</span><span>CSS3</span><span>·</span>
                    <span>JavaScript</span><span>·</span><span>Responsive Design</span><span>·</span>
                    <span>UI/UX</span><span>·</span><span>Git & GitHub</span><span>·</span>
                    <span>Web APIs</span><span>·</span><span>Front-End</span><span>·</span>
                </div>
            </div>
        </section>

        {/* ABOUT */}
        <section className="about" id="about">
            <span className="section-num" aria-hidden="true">01</span>
            <div className="about-media">
                <img src="assets/hero.png" alt="Merjohn Pagente" loading="lazy" data-reveal-img />
            </div>
            <div className="about-copy">
                <span className="eyebrow" data-reveal>My Quest Log</span>
                <h2 data-reveal>Crafting digital worlds, one project at a time.</h2>
                <p data-reveal>
                    I'm <strong>Merjohn Pagente</strong>, a 21-year-old web developer and
                    <strong>BSCS student at Tangub City Global College</strong>, with a passion for
                    creating clean, modern, and functional websites and web applications. I specialize in
                    front-end development, crafting responsive and interactive user interfaces using HTML,
                    CSS, and JavaScript. When I'm not coding, you'll find me gaming—whether it's diving
                    into competitive matches or exploring vast open worlds, gaming fuels my creativity and
                    problem-solving skills.
                </p>
            </div>
        </section>

        {/* STATS */}
        <section className="stats-section" id="stats">
            <span className="section-num" aria-hidden="true">02</span>
            <div className="platform-marquee" aria-hidden="true">
                <div className="platform-marquee__track">
                    <span>Projects</span><span>GitHub</span><span>Code</span><span>Design</span><span>Build</span>
                    <span>Projects</span><span>GitHub</span><span>Code</span><span>Design</span><span>Build</span>
                </div>
            </div>
            <div className="stat-grid">
                <div className="stat-card" data-reveal>
                    <span className="stat-platform">Focus</span>
                    <span className="stat-number">100</span>
                    <span className="stat-label">% Committed to Web Development</span>
                </div>
                <div className="stat-card" data-reveal>
                    <span className="stat-platform">Skills</span>
                    <span className="stat-number">8</span>
                    <span className="stat-label">Core Technologies Mastered</span>
                </div>
                <div className="stat-card" data-reveal>
                    <span className="stat-platform">Projects</span>
                    <span className="stat-number">6</span>
                    <span className="stat-label">Completed & Deployed Projects</span>
                </div>
                <div className="stat-card" data-reveal>
                    <span className="stat-platform">Age</span>
                    <span className="stat-number">21</span>
                    <span className="stat-label">Years Old, Hungry to Learn More</span>
                </div>
            </div>
        </section>

        {/* SKILLS */}
        <section className="skills-section" id="skills">
            <span className="section-num" aria-hidden="true">03</span>
            <span className="eyebrow" data-reveal>What I Work With</span>
            <h2 data-reveal>Technologies under my belt.</h2>
            <div className="skills-grid">
                <article className="skill-card" data-reveal>
                    <span className="skill-icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="40" height="40"><path fill="#E34F26" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/></svg></span>
                    <span className="skill-num">01</span>
                    <h3>HTML5</h3>
                    <div className="skill-ring-small">
                        <svg viewBox="0 0 120 120" width="90" height="90">
                            <circle className="ring-bg" cx="60" cy="60" r="40"/>
                            <circle className="ring-fill" cx="60" cy="60" r="40"/>
                            <text className="ring-center" x="60" y="60" text-anchor="middle" dominant-baseline="central">90%</text>
                        </svg>
                    </div>
                    <p>Semantic markup, accessibility, clean structure.</p>
                </article>
                <article className="skill-card" data-reveal>
                    <span className="skill-icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="40" height="40"><path fill="#1572B6" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/></svg></span>
                    <span className="skill-num">02</span>
                    <h3>CSS3</h3>
                    <div className="skill-ring-small">
                        <svg viewBox="0 0 120 120" width="90" height="90">
                            <circle className="ring-bg" cx="60" cy="60" r="52"/>
                            <circle className="ring-fill" cx="60" cy="60" r="52"/>
                            <text className="ring-center" x="60" y="60" text-anchor="middle" dominant-baseline="central">85%</text>
                        </svg>
                    </div>
                    <p>Animations, layouts, modern responsive design.</p>
                </article>
                <article className="skill-card" data-reveal>
                    <span className="skill-icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="40" height="40"><path fill="#F7DF1E" d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/></svg></span>
                    <span className="skill-num">03</span>
                    <h3>JavaScript</h3>
                    <div className="skill-ring-small">
                        <svg viewBox="0 0 120 120" width="90" height="90">
                            <circle className="ring-bg" cx="60" cy="60" r="52"/>
                            <circle className="ring-fill" cx="60" cy="60" r="52"/>
                            <text className="ring-center" x="60" y="60" text-anchor="middle" dominant-baseline="central">75%</text>
                        </svg>
                    </div>
                    <p>Dynamic functionality and DOM scripting.</p>
                </article>
                <article className="skill-card" data-reveal>
                    <span className="skill-icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="13" height="9" rx="1.5"/><path d="M2 13h13"/><rect x="16" y="8" width="6" height="12" rx="1.5"/><line x1="19" y1="17.5" x2="19" y2="17.5"/></svg></span>
                    <span className="skill-num">04</span>
                    <h3>Responsive</h3>
                    <div className="skill-ring-small">
                        <svg viewBox="0 0 120 120" width="90" height="90">
                            <circle className="ring-bg" cx="60" cy="60" r="52"/>
                            <circle className="ring-fill" cx="60" cy="60" r="52"/>
                            <text className="ring-center" x="60" y="60" text-anchor="middle" dominant-baseline="central">88%</text>
                        </svg>
                    </div>
                    <p>Mobile-first, adaptive layouts that scale.</p>
                </article>
                <article className="skill-card" data-reveal>
                    <span className="skill-icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="40" height="40"><path fill="#F05032" d="M13.09 23.549a1.54 1.54 0 0 1-2.18 0L.451 13.089a1.54 1.54 0 0 1 0-2.179l7.191-7.19 2.733 2.733a1.85 1.85 0 0 0 .964 2.326v6.66a1.849 1.849 0 1 0 1.54 0V8.957l2.508 2.508a1.85 1.85 0 1 0 1.09-1.09l-2.634-2.634a1.85 1.85 0 0 0-2.378-2.377L8.73 2.63 10.91.451a1.54 1.54 0 0 1 2.179 0l10.459 10.46a1.54 1.54 0 0 1 0 2.179z"/></svg></span>
                    <span className="skill-num">05</span>
                    <h3>Git & GitHub</h3>
                    <div className="skill-ring-small">
                        <svg viewBox="0 0 120 120" width="90" height="90">
                            <circle className="ring-bg" cx="60" cy="60" r="52"/>
                            <circle className="ring-fill" cx="60" cy="60" r="52"/>
                            <text className="ring-center" x="60" y="60" text-anchor="middle" dominant-baseline="central">70%</text>
                        </svg>
                    </div>
                    <p>Version control, branching, and deployment.</p>
                </article>
                <article className="skill-card" data-reveal>
                    <span className="skill-icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22v-5"/><path d="M9 8V2"/><path d="M15 8V2"/><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8z"/></svg></span>
                    <span className="skill-num">06</span>
                    <h3>Web APIs</h3>
                    <div className="skill-ring-small">
                        <svg viewBox="0 0 120 120" width="90" height="90">
                            <circle className="ring-bg" cx="60" cy="60" r="52"/>
                            <circle className="ring-fill" cx="60" cy="60" r="52"/>
                            <text className="ring-center" x="60" y="60" text-anchor="middle" dominant-baseline="central">72%</text>
                        </svg>
                    </div>
                    <p>REST integration, fetch, async workflows.</p>
                </article>
                <article className="skill-card" data-reveal>
                    <span className="skill-icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="40" height="40"><path fill="#68217A" d="M1.194 7.543v8.913c0 1.103.588 2.122 1.544 2.674l7.718 4.456a3.086 3.086 0 0 0 3.088 0l7.718-4.456a3.087 3.087 0 0 0 1.544-2.674V7.543a3.084 3.084 0 0 0-1.544-2.673L13.544.414a3.086 3.086 0 0 0-3.088 0L2.738 4.87a3.085 3.085 0 0 0-1.544 2.673Zm5.403 2.914v3.087a.77.77 0 0 0 .772.772.773.773 0 0 0 .772-.772.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546 2.314 2.314 0 1 1-4.631 0v-3.087c0-.615.244-1.203.679-1.637a2.312 2.312 0 0 1 3.274 0c.434.434.678 1.023.678 1.637a.769.769 0 0 1-.226.545.767.767 0 0 1-1.091 0 .77.77 0 0 1-.226-.545.77.77 0 0 0-.772-.772.771.771 0 0 0-.772.772Zm12.35 3.087a.77.77 0 0 1-.772.772h-.772v.772a.773.773 0 0 1-1.544 0v-.772h-1.544v.772a.773.773 0 0 1-1.317.546.775.775 0 0 1-.226-.546v-.772H12a.771.771 0 1 1 0-1.544h.772v-1.543H12a.77.77 0 1 1 0-1.544h.772v-.772a.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546v.772h1.544v-.772a.773.773 0 0 1 1.544 0v.772h.772a.772.772 0 0 1 0 1.544h-.772v1.543h.772a.776.776 0 0 1 .772.772Zm-3.088-2.315h-1.544v1.543h1.544v-1.543Z"/></svg></span>
                    <span className="skill-num">07</span>
                    <h3>C#</h3>
                    <div className="skill-ring-small">
                        <svg viewBox="0 0 120 120" width="90" height="90">
                            <circle className="ring-bg" cx="60" cy="60" r="52"/>
                            <circle className="ring-fill" cx="60" cy="60" r="52"/>
                            <text className="ring-center" x="60" y="60" text-anchor="middle" dominant-baseline="central">70%</text>
                        </svg>
                    </div>
                    <p>Object-oriented programming, .NET framework.</p>
                </article>
                <article className="skill-card" data-reveal>
                    <span className="skill-icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="40" height="40"><path fill="#3776AB" d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/></svg></span>
                    <span className="skill-num">08</span>
                    <h3>Python</h3>
                    <div className="skill-ring-small">
                        <svg viewBox="0 0 120 120" width="90" height="90">
                            <circle className="ring-bg" cx="60" cy="60" r="52"/>
                            <circle className="ring-fill" cx="60" cy="60" r="52"/>
                            <text className="ring-center" x="60" y="60" text-anchor="middle" dominant-baseline="central">75%</text>
                        </svg>
                    </div>
                    <p>Scripting, automation, backend development.</p>
                </article>
            </div>
        </section>

        {/* WORK */}
        <section className="work-section" id="work">
            <span className="section-num" aria-hidden="true">04</span>
            <span className="eyebrow" data-reveal>Featured Work</span>
            <h2 data-reveal>Projects I've brought to life.</h2>
            <p className="work-section-copy" data-reveal>
                A small selection of what I've built. Each project taught me something new and pushed me forward.
            </p>

            <div className="filter-bar" data-reveal>
                <input type="radio" name="filter" id="f-all" value="all" defaultChecked />
                <label htmlFor="f-all" className="filter-btn">All</label>
                <input type="radio" name="filter" id="f-web" value="web" />
                <label htmlFor="f-web" className="filter-btn">Web Apps</label>
                <input type="radio" name="filter" id="f-website" value="website" />
                <label htmlFor="f-website" className="filter-btn">Websites</label>
                <input type="radio" name="filter" id="f-design" value="design" />
                <label htmlFor="f-design" className="filter-btn">Design</label>
            </div>

            <div className="work-grid">
                <article className="work-card" data-category="web" data-reveal>
                    <div className="work-card__thumb">
                        <img src="assets/fitcore.png" alt="FitCore Gym Management" loading="lazy" className="is-contain" />
                        <div className="work-card__placeholder" aria-hidden="true">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#f4913f" strokeWidth="1.5"><rect x="6" y="4" width="12" height="14" rx="2"/><line x1="8" y1="8" x2="16" y2="8"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="8" y1="16" x2="12" y2="16"/></svg>
                            <span>FitCore Gym Management</span>
                        </div>
                    </div>
                    <span className="work-card__tag">Web App</span>
                    <h3>FitCore Gym Management</h3>
                    <p>A full gym management system with membership tracking, class scheduling, and trainer management.</p>
                    <a className="work-about-link" href="#/project/fitcore">
                        <span>About this project</span>
                        <span className="work-about-link__icon" aria-hidden="true"><ArrowRightIcon width="12" height="12" /></span>
                    </a>
<div className="work-card__links">
                        <a href="https://fitcoregyms.vercel.app" target="_blank" rel="noopener" className="btn-work">Live Demo ↗</a>
                        <a href="https://github.com/MerjohnPagente/FITCORE-GYM-MANAGEMENT-SYSTEM" target="_blank" rel="noopener" className="btn-work-outline">Source</a>
                    </div>
                </article>

                <article className="work-card" data-category="web" data-reveal>
                    <div className="work-card__thumb">
                        <img src="assets/classcast.png" alt="ClassCast" loading="lazy" />
                        <div className="work-card__placeholder" aria-hidden="true">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#f4913f" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M6 8h12"/><path d="M6 12h8"/><path d="M6 16h4"/></svg>
                            <span>ClassCast</span>
                        </div>
                    </div>
                    <span className="work-card__tag">Offline App</span>
                    <h3>ClassCast</h3>
                    <p>ClassCast is an offline classroom casting app. The teacher's phone or laptop becomes the local server; students join over the same Wi-Fi or hotspot and follow the lesson live — no internet, accounts or cloud required.</p>
                    <a className="work-about-link" href="#/project/classcast">
                        <span>About this project</span>
                        <span className="work-about-link__icon" aria-hidden="true"><ArrowRightIcon width="12" height="12" /></span>
                    </a>
<div className="work-card__links">
                        <a href="https://classcastmjdev.vercel.app" target="_blank" rel="noopener" className="btn-work">Live Demo ↗</a>
                        <a href="#" className="btn-work-outline">Source</a>
                    </div>
                </article>

                <article className="work-card" data-category="website" data-reveal>
                    <div className="work-card__thumb">
                        <img src="assets/johnfood.png" alt="Johnfood Delivery" loading="lazy" />
                        <div className="work-card__placeholder" aria-hidden="true">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#f4913f" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M6 8h12"/><path d="M6 12h8"/><path d="M6 16h4"/></svg>
                            <span>Johnfood Delivery</span>
                        </div>
                    </div>
                    <span className="work-card__tag">Website</span>
                    <h3>Johnfood Delivery</h3>
                    <p>Johnfood Delivery is a food ordering and delivery website where users can browse restaurant menus, discover their favorite meals, and place orders for delivery or pickup. It features an intuitive shopping cart, real-time order tracking, and a seamless checkout experience, making food ordering fast, convenient, and enjoyable.</p>
                    <a className="work-about-link" href="#/project/johnfood">
                        <span>About this project</span>
                        <span className="work-about-link__icon" aria-hidden="true"><ArrowRightIcon width="12" height="12" /></span>
                    </a>
<div className="work-card__links">
                        <a href="https://johnfoodland.vercel.app" target="_blank" rel="noopener" className="btn-work">Live Demo ↗</a>
                        <a href="#" className="btn-work-outline">Source</a>
                    </div>
                </article>

                <article className="work-card" data-category="web" data-reveal>
                    <div className="work-card__thumb">
                        <img src="assets/regex.png" alt="Regex Challenge Game" loading="lazy" />
                        <div className="work-card__placeholder" aria-hidden="true">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#e4913f" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M6 8h12"/><path d="M6 12h8"/><path d="M6 16h4"/></svg>
                            <span>Regex Challenge Game</span>
                        </div>
                    </div>
                    <span className="work-card__tag">Web App</span>
                    <h3>Regex Challenge Game</h3>
                    <p>An interactive regex learning game with progressive levels, real-time pattern testing, and explanations.</p>
                    <a className="work-about-link" href="#/project/regex">
                        <span>About this project</span>
                        <span className="work-about-link__icon" aria-hidden="true"><ArrowRightIcon width="12" height="12" /></span>
                    </a>
<div className="work-card__links">
                        <a href="https://merjohnpagente.github.io/-regex-challenge-game/" target="_blank" rel="noopener" className="btn-work">Live Demo ↗</a>
                        <a href="https://github.com/MerjohnPagente/regex-challenge-game" target="_blank" rel="noopener" className="btn-work-outline">Source</a>
                    </div>
                </article>

                <article className="work-card" data-category="web" data-reveal>
                    <div className="work-card__thumb">
                        <img src="assets/momentum.png" alt="Momentum" loading="lazy" />
                        <div className="work-card__placeholder" aria-hidden="true">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#e4913f" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v4"/><path d="M12 16h.01"/><line x1="8" y1="2" x2="16" y2="2"/></svg>
                            <span>Momentum</span>
                        </div>
                    </div>
                    <span className="work-card__tag">Web App</span>
                    <h3>Momentum</h3>
                    <p>A single-file gym management system for members, memberships, payments and check-ins.</p>
                    <a className="work-about-link" href="#/project/momentum">
                        <span>About this project</span>
                        <span className="work-about-link__icon" aria-hidden="true"><ArrowRightIcon width="12" height="12" /></span>
                    </a>
<div className="work-card__links">
                        <a href="https://merjohnpagente.github.io/MOMENTUM/" target="_blank" rel="noopener" className="btn-work">Live Demo ↗</a>
                        <a href="#" className="btn-work-outline">Source</a>
                    </div>
                </article>

                <article className="work-card" data-category="web" data-reveal>
                    <div className="work-card__thumb">
                        <img src="assets/multipleai.png" alt="Multiple AI" loading="lazy" />
                        <div className="work-card__placeholder" aria-hidden="true">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#e4913f" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v4"/><path d="M12 16h.01"/><line x1="8" y1="2" x2="16" y2="2"/></svg>
                            <span>Multiple AI</span>
                        </div>
                    </div>
                    <span className="work-card__tag">Web App</span>
                    <h3>Multiple AI</h3>
                    <p>Multi-AI chat interface</p>
                    <a className="work-about-link" href="#/project/multiple-ai">
                        <span>About this project</span>
                        <span className="work-about-link__icon" aria-hidden="true"><ArrowRightIcon width="12" height="12" /></span>
                    </a>
<div className="work-card__links">
                        <a href="https://merjohns-ai-console-node.onrender.com/" target="_blank" rel="noopener" className="btn-work">Live Demo ↗</a>
                        <a href="#" className="btn-work-outline">Source</a>
                    </div>
                </article>

                <article className="work-card" data-category="web" data-reveal>
                    <div className="work-card__thumb">
                        <img src="assets/gorillagym.png" alt="Gorilla Gym" loading="lazy" />
                        <div className="work-card__placeholder" aria-hidden="true">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#00e676" strokeWidth="1.5"><rect x="6" y="4" width="12" height="14" rx="2"/><path d="M8 8h8"/><path d="M8 12h8"/><path d="M8 16h5"/></svg>
                            <span>Gorilla Gym</span>
                        </div>
                    </div>
                    <span className="work-card__tag">Web App</span>
                    <h3>Gorilla Gym</h3>
                    <p>Flutter-based gym management — Strength · Focus · Discipline. Manages members, billing, trainers, and check-ins.</p>
                    <a className="work-about-link" href="#/project/gorilla-gym">
                        <span>About this project</span>
                        <span className="work-about-link__icon" aria-hidden="true"><ArrowRightIcon width="12" height="12" /></span>
                    </a>
<div className="work-card__links">
                        <a href="https://merjohnpagente.github.io/gorillagymapp/" target="_blank" rel="noopener" className="btn-work">Live Demo ↗</a>
                        <a href="https://github.com/MerjohnPagente/gorillagymapp" target="_blank" rel="noopener" className="btn-work-outline">Source</a>
                    </div>
                </article>

                <article className="work-card" data-category="web" data-reveal>
                    <div className="work-card__thumb">
                        <img src="assets/spotify.png" alt="Spotify" loading="lazy" />
                        <div className="work-card__placeholder" aria-hidden="true">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1ed760" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M7 14c2 1 6 1 8 0"/><path d="M8 17c1.5 1 4.5 1 6 0"/><path d="M7 11c2.5 1.2 7 1.2 10 0"/></svg>
                            <span>Spotify</span>
                        </div>
                    </div>
                    <span className="work-card__tag">Web App</span>
                    <h3>Spotify</h3>
                    <p>Spotify-inspired streaming UI — dark theme, browse / search / play with YouTube ad-free audio.</p>
                    <a className="work-about-link" href="#/project/spotify">
                        <span>About this project</span>
                        <span className="work-about-link__icon" aria-hidden="true"><ArrowRightIcon width="12" height="12" /></span>
                    </a>
<div className="work-card__links">
                        <a href="https://merjohnpagente.github.io/spotify/" target="_blank" rel="noopener" className="btn-work">Live Demo ↗</a>
                        <a href="https://github.com/MerjohnPagente/spotify" target="_blank" rel="noopener" className="btn-work-outline">Source</a>
                    </div>
                </article>
            </div>
        </section>

        {/* CONNECT */}
        <section className="connect" id="connect">
            <span className="section-num" aria-hidden="true">05</span>
            <div className="connect-watermark" aria-hidden="true">LET'S TALK</div>
            <div className="connect-inner">
                <span className="eyebrow" data-reveal>Contact me</span>
                <h2 data-reveal>Let's build something <em>together.</em></h2>
                <p className="connect-copy" data-reveal>
                    Have a project, a role to fill, or just want to talk code? Drop a message below — I usually reply within a day.
                </p>

                <div className="connect-grid" data-reveal>
                    <a className="connect-card" href="mailto:merjohnpagente2004@gmail.com">
                        <span className="connect-card__icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 4l-10 8L2 4"/></svg>
                        </span>
                        <div className="connect-card__text">
                            <span className="connect-card__name">Email</span>
                            <span className="connect-card__meta">merjohnpagente2004@gmail.com</span>
                        </div>
                    </a>
                    <a href="https://github.com/MerjohnPagente" target="_blank" rel="noopener" className="connect-card">
                        <span className="connect-card__icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S17.73.825 14 3a9.48 9.48 0 0 0-6 0C1.27.825 1 3 1 3a5.07 5.07 0 0 0-.09 1.77A5.44 5.44 0 0 0 2 8.5c0 5.49 3.3 6.64 6.44 7A3.37 3.37 0 0 0 7.5 18v3"/></svg>
                        </span>
                        <div className="connect-card__text">
                            <span className="connect-card__name">GitHub</span>
                            <span className="connect-card__meta">MerjohnPagente</span>
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/merjohn-pagente-216775448" target="_blank" rel="noopener" className="connect-card">
                        <span className="connect-card__icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                        </span>
                        <div className="connect-card__text">
                            <span className="connect-card__name">LinkedIn</span>
                            <span className="connect-card__meta">Merjohn Pagente</span>
                        </div>
                    </a>
                    <a href="https://web.facebook.com/Mjhnnjhn" target="_blank" rel="noopener" className="connect-card">
                        <span className="connect-card__icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                        </span>
                        <div className="connect-card__text">
                            <span className="connect-card__name">Facebook</span>
                            <span className="connect-card__meta">Merjohn Pagente</span>
                        </div>
                    </a>
                </div>

                <a className="connect-cta" href="mailto:merjohnpagente2004@gmail.com" data-reveal>
                    <span className="connect-cta__label">Send Me an Email</span>
                    <span className="connect-cta__url">merjohnpagente2004@gmail.com</span>
                    <span className="connect-cta__arrow" aria-hidden="true">↗</span>
                </a>
            </div>
        </section>

        </>
    )}
    </main>

    <footer className="site-footer">
        <span>&copy; 2026 MerJohn Pagente. All rights reserved.</span>
        <span>Web Developer · UI/UX Designer · Front-End Specialist</span>
    </footer>

    </>
  )
}

export default App
