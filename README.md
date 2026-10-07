# Muhammad Bakr - Junior Java Backend Developer

**Location:** El Basatin, Cairo, Egypt

Junior Java Backend Developer and recent Computer Science graduate, focused on Java backend engineering with Spring Boot and PostgreSQL. Built role-aware platforms, event-driven services, financial reconciliation systems, and reproducible database performance experiments across Java 21 and Java 25. Project work spans Docker, CI/CD, Kubernetes, and AWS serverless workflows validated locally with LocalStack.

## Skills

- **Languages:** Java, Python, C++, C#, JavaScript, SQL
- **Backend:** Spring Framework (Spring Boot, Spring Security, Spring Data JPA, Spring MVC), Hibernate, REST APIs, Microservices, JDBC, JWT
- **Data:** PostgreSQL, MySQL, Oracle SQL/PLSQL, MongoDB, Flyway
- **Systems & Cloud:** Linux, Apache Kafka, Event-Driven Architecture, Kubernetes, AWS (SQS, Lambda, DynamoDB, S3, IAM; LocalStack validated), Terraform
- **Testing & Delivery:** JUnit 5, Mockito, Testcontainers, OpenAPI/Swagger, Postman, Docker, Git, GitHub Actions, Maven, Gradle, CI/CD
- **Concepts:** OOP, SOLID, Design Patterns, Multithreading & Concurrency, Transactions, SDLC, Unit & Integration Testing, Agile/Scrum

## Education

**Cairo University — Faculty of Science**  
Bachelor of Science (B.Sc.) in Computer Science · Oct 2021 - Jan 2026  
GPA: 3.289 out of 5 · Very Good with Honors · Military Status: Exempted

## Projects

### [MerHouse — B2B Fulfillment Coordination Platform](https://github.com/Mr-Wolv/MerHouseSuite_Bakr101_2026)

- Built a role-aware B2B fulfillment platform for merchants, warehouse providers, and operators, covering inventory, inbound stock, orders, allocation, fulfillment, exceptions, shipments, notifications, and service accountability.
- Implemented tenant-aware Spring Boot REST APIs with Spring Security and PostgreSQL, including transactional outbox, inventory locking, partial allocation/backorders, shipment state transitions, and OpenAPI.
- Delivered React/TypeScript and Capacitor Android clients with automated tests. Packaged with Docker Compose and automated CI through GitHub Actions.

**Stack:** Java 21, Spring Boot, Spring Security, Spring Data JPA, PostgreSQL, React/TypeScript, Docker, GitHub Actions

### [EventFlow — Distributed Event-Driven Backend](https://github.com/Mr-Wolv/EventFlow_Bakr101_2026)

- Built two independently deployable Spring Boot microservices using Kafka, at-least-once processing, event-ID idempotency, retries, and dead-letter handling; deployed with Strimzi on Kubernetes, smoke-tested in-cluster.
- Implemented an AWS serverless variant using SQS, Lambda (Java 21), DynamoDB, S3, IAM, and Terraform. Validated locally with LocalStack: enforced IAM, durable idempotency; no production AWS deployment is claimed.

**Stack:** Java 25, Spring Boot 3.5, Apache Kafka, Kubernetes, AWS, Terraform, LocalStack, GitHub Actions

### [QueryForge — PostgreSQL Performance Engineering](https://github.com/Mr-Wolv/QueryForge_Bakr101_2026)

- Built reproducible k6 benchmarks for a deterministic 1M-row PostgreSQL catalog; reduced filtered-search p95 from 8.18 s to 130 ms (~63x) at 10 req/s with a workload-shaped composite index.
- Compared OFFSET and keyset pagination, index ordering, and workloads up to 200 concurrent users; identified the 10-connection pool as the next measured bottleneck using EXPLAIN (ANALYZE, BUFFERS).

**Stack:** Java 25, Spring Boot 3.5.5, PostgreSQL 17, Docker, k6

### [Reconcile — Payment & Settlement Reconciliation Engine](https://github.com/Mr-Wolv/Reconcile_Bakr101_2026)

- Built a double-entry payments backend where the database enforces the financial invariants - 23 tables, 36 indexes, 10 triggers - across a create-authorize-capture-settle-refund lifecycle, payouts, and an append-only audit trail reconstructable from the database alone.
- Ingested signed provider webhooks over the raw bytes with replay protection, proved idempotency under 32 concurrent retries, and reconciled ledger-derived expectations against settlement records deterministically across 50 subjects and all nine outcomes, byte for byte; 354 tests (353 passed, 1 deliberately skipped, 0 failed). Validated prototype: not production-ready, not PCI compliant, no real payment processing.

**Stack:** Java 25, Spring Boot, Spring Security, Spring Data JPA, PostgreSQL 18, Flyway, Docker, GitHub Actions

## Achievements

Ranked #1 nationally in Computer Science and #7 nationally in Mathematics across Faculties of Science, Egypt (2026 graduates) | #2 in Mathematics at Cairo University

## Languages

Arabic — Native | English — C1-level proficiency

## More work

Chess Studio and Engineering Tooling are also public for deeper technical review.

## How I work

I prefer understanding requirements and constraints before choosing an implementation. I value simple architecture, explicit tradeoffs, automated validation, reproducible workflows, and evidence over unsupported claims.

## Links

- Portfolio: https://mr-wolv.github.io/Mr-Wolv/
- LinkedIn: https://www.linkedin.com/in/muhammad-bakr-21582b3ab/
