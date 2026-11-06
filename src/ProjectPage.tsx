import { ArrowLeftIcon, ArrowUpRightIcon } from './icons'
import type { Project } from './projects'

type ProjectPageProps = {
    project: Project
}

export default function ProjectPage({ project }: ProjectPageProps) {
    return (
        <article className="project-page">
            <a className="project-back" href="#work">
                <span className="project-back__arrow" aria-hidden="true"><ArrowLeftIcon /></span>
                Back to projects
            </a>

            <header className="project-hero">
                <div className="project-hero__copy">
                    <span className="work-card__tag">{project.tag}</span>
                    <h1 className="project-hero__title">{project.title}</h1>
                    <p className="project-hero__summary">{project.summary}</p>
                    <div className="project-hero__actions">
                        <a className="btn-resume btn-resume--solid" href={project.demo} target="_blank" rel="noopener">
                            <span className="btn-resume__label">Live Demo</span>
                            <span className="btn-resume__arrow" aria-hidden="true"><ArrowUpRightIcon /></span>
                        </a>
                        {project.source && (
                            <a className="project-source" href={project.source} target="_blank" rel="noopener">
                                View source <ArrowUpRightIcon width="12" height="12" />
                            </a>
                        )}
                    </div>
                </div>

                <figure className="project-hero__media">
                    <img
                        src={project.image}
                        alt={`${project.title} preview`}
                        className={project.fit === 'contain' ? 'is-contain' : undefined}
                    />
                </figure>
            </header>

            <div className="project-detail-grid">
                <div className="project-detail-main">
                    <section className="project-block">
                        <span className="eyebrow">About the project</span>
                        <p className="project-about">{project.about}</p>
                    </section>

                    <section className="project-block">
                        <h2 className="project-block__title">What it does</h2>
                        <ul className="project-features">
                            {project.features.map((feature) => (
                                <li key={feature}>{feature}</li>
                            ))}
                        </ul>
                    </section>
                </div>

                <aside className="project-detail-side">
                    <section className="project-panel">
                        <h2 className="project-panel__title">Tech stack</h2>
                        <ul className="project-stack">
                            {project.stack.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </section>

                    <section className="project-panel project-panel--backend">
                        <h2 className="project-panel__title">Backend</h2>
                        <h3 className="project-backend__name">{project.backend.name}</h3>
                        <p className="project-backend__copy">{project.backend.description}</p>
                        <ul className="project-backend__list">
                            {project.backend.points.map((point) => (
                                <li key={point}>{point}</li>
                            ))}
                        </ul>
                    </section>

                    <section className="project-panel">
                        <h2 className="project-panel__title">Project details</h2>
                        <dl className="project-meta">
                            {project.meta.map(({ label, value }) => (
                                <div className="project-meta__row" key={label}>
                                    <dt>{label}</dt>
                                    <dd>{value}</dd>
                                </div>
                            ))}
                        </dl>
                    </section>
                </aside>
            </div>
        </article>
    )
}

export function MissingProject() {
    return (
        <section className="project-page project-missing">
            <span className="eyebrow">404</span>
            <h1>Project not found.</h1>
            <p>The project you are looking for does not exist or has been moved.</p>
            <a className="btn-resume btn-resume--solid" href="#work">Back to projects</a>
        </section>
    )
}
