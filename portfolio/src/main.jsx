import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const profile = {
  name: 'Muhammad Hedia Abd-Elhamed',
  email: 'm7mdhedia3bd@gmail.com',
  github: 'https://github.com/Mr-Wolv',
  linkedin: 'https://www.linkedin.com/in/muhammad-bakr-21582b3ab/',
  merhouse: 'https://github.com/Mr-Wolv/MerHouseSuite_Bakr101_2026',
  merhouseLive: 'https://merhouse-354e7.web.app',
  merhouseApi: 'https://m7mdhbkr-merhouse-backend.hf.space',
  eventflow: 'https://github.com/Mr-Wolv/EventFlow_Bakr101_2026',
  queryforge: 'https://github.com/Mr-Wolv/QueryForge_Bakr101_2026',
  chess: 'https://github.com/Mr-Wolv/Chess_Studio',
  skillsRepo: 'https://github.com/Mr-Wolv/Skill_Playground_Bakr101_2026',
  baseUrl: import.meta.env.BASE_URL
};

const resumeUrl = `${profile.baseUrl}cv.html`;

const skills = [
  ['Programming:', 'Java · Python · C++ · C# · JavaScript · SQL'],
  ['Backend:', 'Spring Boot · Spring Security · Spring Data JPA · Hibernate · REST APIs'],
  ['Data:', 'PostgreSQL · Oracle SQL/PLSQL · MongoDB'],
  ['Systems & Cloud:', 'Apache Kafka · Event-Driven Architecture · Kubernetes · AWS services (SQS · Lambda · DynamoDB · S3 · IAM; locally validated with LocalStack) · Terraform'],
  ['Testing & Delivery:', 'JUnit 5 · Mockito · Testcontainers · OpenAPI/Swagger · Docker · Docker Compose · GitHub Actions · CI/CD · Maven · Flyway'],
  ['Additional Skills:', 'Linux · Algorithms · AI-assisted software development (agentic workflows)'],
  ['Frontend:', 'React · TypeScript · Vite'],
];

function Arrow() { return <span aria-hidden="true">↗</span>; }
function SectionLabel({ children }) { return <p className="eyebrow">{children}</p>; }

function App() {
  return (
    <div className="site-shell">
      <header className="nav">
        <a className="brand" href="#top" aria-label="Home"><span>MH</span></a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a><a href="#about">About</a><a href="#skills">Skills</a><a href="#contact">Contact</a>
        </nav>
        <div className="nav-actions">
          <a className="nav-cta" href={resumeUrl}>CV <Arrow /></a>
          <a className="nav-cta" href={profile.github} target="_blank" rel="noreferrer">GitHub <Arrow /></a>
        </div>
      </header>

      <main id="top">
        <section className="hero container">
          <div className="hero-copy">
            <div className="status"><i /> Available for software engineering opportunities</div>
            <h1>Backend-focused engineer who likes to <em>understand the system</em> before building it.</h1>
            <p className="hero-lede">Junior backend developer focused on Java/Spring Boot, databases, distributed systems, and practical cloud engineering.</p>
            <div className="hero-actions">
              <a className="button primary" href="#work">Explore my work <Arrow /></a>
              <a className="button ghost" href={resumeUrl}>View CV <Arrow /></a>
              <a className="button ghost" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
            </div>
          </div>
          <aside className="hero-aside">
            <div className="code-card">
              <div className="code-top"><span></span><span></span><span></span><b>engineer.md</b></div>
              <pre>{`approach() {
  understand(requirements);
  identify(constraints);
  design(simple_solution);
  build_incrementally();
  validate(with_evidence);
  refine(from_feedback);
}`}</pre>
            </div>
            <div className="hero-facts">
              <div><strong>JAVA</strong><span>Primary backend stack</span></div>
              <div><strong>#1</strong><span>National CS ranking*</span></div>
            </div>
          </aside>
        </section>

        <section id="work" className="section container">
          <SectionLabel>01 · Projects</SectionLabel>
          <div className="section-head"><h2>Projects with engineering behind them.</h2><p>I prefer projects where the interesting part is not just the framework, but the decisions around the system.</p></div>

          <article className="project-feature">
            <div className="project-number">01</div>
            <div className="project-body">
              <div className="project-title-row"><div><p className="project-kicker">FLAGSHIP PROJECT</p><h3>MerHouse</h3></div><span className="pill">B2B fulfillment</span></div>
              <p className="project-description">Built a role-aware B2B fulfillment platform for merchants, warehouse providers, and operators, covering inventory, inbound stock, orders, allocation, fulfillment, exceptions, shipments, notifications, and service accountability. Implemented tenant-aware Spring Boot REST APIs with Spring Security and PostgreSQL, including transactional outbox, inventory locking, partial allocation/backorders, shipment state transitions, and OpenAPI. Delivered React/TypeScript and Capacitor Android clients with automated tests, Docker Compose, and GitHub Actions CI.</p>
              <div className="tag-row"><span>Java 21</span><span>Spring Boot</span><span>Spring Security</span><span>PostgreSQL</span><span>React</span><span>TypeScript</span><span>Capacitor</span><span>Docker</span><span>GitHub Actions</span></div>
              <div className="project-links"><a href={profile.merhouseLive} target="_blank" rel="noreferrer">Live app <Arrow /></a><a href={profile.merhouse} target="_blank" rel="noreferrer">Source & documentation <Arrow /></a><a href={profile.merhouseApi} target="_blank" rel="noreferrer">Backend <Arrow /></a></div>
            </div>
            <div className="project-side"><div className="architecture"><span>React / Vite</span><b>↓</b><span>REST API</span><b>↓</b><span>Spring Boot</span><b>↓</b><span>PostgreSQL</span></div><small>Web + Android shell · automated tests · CI quality gates</small></div>
          </article>

          <article className="project-feature project-feature-secondary">
            <div className="project-number">02</div>
            <div className="project-body">
              <div className="project-title-row"><div><p className="project-kicker">DISTRIBUTED SYSTEMS PROJECT</p><h3>EventFlow</h3></div><span className="pill">Kafka + AWS paths</span></div>
              <p className="project-description">Two Spring Boot services demonstrate Kafka-based asynchronous processing, idempotency, retries, and dead-letter handling, deployed with Strimzi on Kubernetes. An AWS serverless variant uses SQS, Lambda, DynamoDB, S3, IAM, and Terraform; it is validated locally with LocalStack.</p>
              <div className="tag-row"><span>Java 25</span><span>Spring Boot 3.5</span><span>Kafka</span><span>Kubernetes</span><span>AWS</span><span>SQS</span><span>Lambda</span><span>DynamoDB</span><span>S3</span><span>Terraform</span><span>LocalStack</span><span>GitHub Actions</span></div>
              <div className="project-links"><a href={profile.eventflow} target="_blank" rel="noreferrer">Source & documentation <Arrow /></a></div>
              <p className="muted">AWS path validated locally with LocalStack and enforced IAM; duplicate delivery and durable idempotency are covered by integration validation and CI. No production AWS deployment is claimed.</p>
            </div>
            <div className="project-side"><div className="architecture"><span>Kafka path</span><b>↓</b><span>Spring services</span><b>↓</b><span>Kubernetes</span><b>↔</b><span>AWS path: SQS → Lambda → DynamoDB + S3</span></div><small>At-least-once processing · retries · dead letters · in-cluster and LocalStack CI verification</small></div>
          </article>

          <article className="project-feature project-feature-secondary">
            <div className="project-number">03</div>
            <div className="project-body">
              <div className="project-title-row"><div><p className="project-kicker">DATABASE & PERFORMANCE ENGINEERING</p><h3>QueryForge</h3></div><span className="pill">PostgreSQL performance</span></div>
              <p className="project-description">A Spring Boot service for reproducible PostgreSQL experiments across dataset scale, query plans, indexing, pagination, and concurrency. At 1M rows, a workload-shaped index reduced filtered-search p95 from 8.18 s to 130 ms (~63×) at 10 req/s.</p>
              <div className="tag-row"><span>Java 25</span><span>Spring Boot 3.5.5</span><span>PostgreSQL 17</span><span>Docker</span><span>k6</span><span>EXPLAIN ANALYZE</span><span>Testcontainers</span><span>GitHub Actions</span></div>
              <div className="project-links"><a href={profile.queryforge} target="_blank" rel="noreferrer">Source, benchmarks & evidence <Arrow /></a></div>
              <p className="muted">At 1M rows, filtered-search p95 fell from 8.18 s to 130 ms (~63×) after a workload-shaped index; further experiments identified the connection pool as the next measured bottleneck.</p>
            </div>
            <div className="project-side"><div className="architecture"><span>REST API</span><b>↓</b><span>Spring Boot</span><b>↓</b><span>PostgreSQL</span><b>↕</b><span>k6 benchmarks</span></div><small>Dataset scaling · query plans · indexing · keyset pagination · concurrency experiments</small></div>
          </article>

          <div className="section-head work-subhead"><h2>More work.</h2><p>Other projects remain public for deeper technical review.</p></div>
          <div className="work-grid">
            <article className="work-card"><span className="card-index">04</span><h3>Chess Studio</h3><p>A Windows chess application with an MVC-inspired structure, Stockfish integration, packaged releases, and CI-driven builds.</p><a href={profile.chess} target="_blank" rel="noreferrer">Read the project repo <Arrow /></a></article>
            <article className="work-card"><span className="card-index">05</span><h3>Engineering Tooling</h3><p>A governed engineering-skill repository with catalog validation, mirror parity checks, documentation, and automation for AI-assisted development workflows.</p><a href={profile.skillsRepo} target="_blank" rel="noreferrer">Explore the tooling repo <Arrow /></a></article>
          </div>
        </section>

        <section id="about" className="section section-alt">
          <div className="container about-grid">
            <div><SectionLabel>02 · About</SectionLabel><h2>Grounded in fundamentals. Comfortable crossing stacks.</h2></div>
            <div className="about-copy">
              <p>I am a backend developer most interested in building reliable backend and full-stack systems. Java and Spring Boot are my strongest backend tools, while my project work has also taken me through databases, frontend systems, Docker, CI, distributed systems, cloud infrastructure, and multiple supporting languages.</p>
              <p>I built EventFlow to study distributed event processing and also implemented a serverless AWS variant using SQS, Lambda, DynamoDB, S3, IAM, and Terraform. The AWS path was integration-tested locally with LocalStack under enforced IAM and automated in CI; I do not present it as a production AWS deployment.</p>
              <p>I built QueryForge to study database behavior rather than assume it: deterministic datasets, execution-plan analysis, workload-shaped indexes, pagination strategies, and concurrency experiments are all backed by reproducible measurements.</p>
              <p>I also work across C# and other supporting languages alongside my Java background. C#/.NET is not presented as my primary production stack.</p>
              <div className="education"><span>CAIRO UNIVERSITY · FACULTY OF SCIENCE</span><strong>B.Sc. Computer Science</strong><span>Graduated January 2026 · GPA 3.289 / 5 · Very Good with Honors</span></div>
            </div>
          </div>
        </section>

        <section id="skills" className="section container">
          <SectionLabel>03 · Toolbox</SectionLabel>
          <div className="skills-grid">{skills.map(([title, items]) => <div className="skill-row" key={title}><span>{title}</span><strong>{items}</strong></div>)}</div>
        </section>

        <section className="section container achievements">
          <SectionLabel>04 · Academic achievement</SectionLabel>
          <div className="achievement-grid">
            <div><strong>#1</strong><span>Nationally in Computer Science across Faculties of Science</span></div>
            <div><strong>#2</strong><span>Mathematics department · Cairo University</span></div>
            <div><strong>#7</strong><span>Nationally in Mathematics across Faculties of Science</span></div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="container contact-inner"><div><SectionLabel>05 · Contact</SectionLabel><h2>Have a problem worth building?</h2><p>I'm open to junior software engineering opportunities, internships, and serious engineering projects.</p></div><a className="contact-email" href={`mailto:${profile.email}`}>{profile.email} <Arrow /></a></div>
        </section>
      </main>

      <footer className="footer container"><span>© {new Date().getFullYear()} {profile.name}</span><div><a href={profile.github} target="_blank" rel="noreferrer">GitHub</a><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href={resumeUrl}>CV</a><a href={`mailto:${profile.email}`}>Email</a></div></footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
