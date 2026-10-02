# Muhammad Bakr - Junior Backend Developer

**Location:** El Basatin, Cairo, Egypt

Recent Computer Science graduate focused on Java backend engineering with Spring Boot and PostgreSQL. Built role-aware platforms, Kafka-based services, and reproducible database performance experiments. Project work includes Docker, CI/CD, Kubernetes, and AWS integrations validated locally with LocalStack.

## Skills

- **Programming:** Java, Python, C++, C#, JavaScript, SQL, OOP, Data Structures, Algorithms, Problem Solving
- **Backend:** Spring Boot, Spring Security, Spring Data JPA, Hibernate, REST APIs
- **Data:** PostgreSQL, Oracle SQL/PLSQL, MongoDB
- **Systems & Cloud:** Linux, Apache Kafka, Event-Driven Architecture, Kubernetes, AWS services (SQS, Lambda, DynamoDB, S3, IAM; locally validated with LocalStack), Terraform
- **Testing & Delivery:** JUnit 5, Mockito, Testcontainers, OpenAPI/Swagger, Docker, Docker Compose, GitHub Actions, CI/CD, Maven, Flyway
- **Frontend:** React, TypeScript, Vite
- **Development Workflow:** AI-assisted software development (agentic workflows)

## Education

**Cairo University — Faculty of Science**  
B.Sc. in Computer Science · Started October 2021 · Graduated January 2026  
GPA: 3.289 out of 5 · Very Good with Honors

## Achievements

- Among 2026 graduates: ranked #1 nationally in Computer Science and #7 nationally in Mathematics across Faculties of Science.
- Also ranked #2 in Mathematics at Cairo University.

## Projects

### [MerHouse — B2B Fulfillment Coordination Platform](https://github.com/Mr-Wolv/MerHouseSuite_Bakr101_2026)

- Built a role-aware B2B fulfillment platform for merchants, warehouse providers, and platform operators, covering inventory, inbound stock, orders, allocation, fulfillment, exceptions, shipments, notifications, and service accountability.
- Implemented tenant-aware Spring Boot REST APIs with Spring Security and PostgreSQL, including transactional outbox, inventory locking, partial allocation/backorders, shipment state transitions, and OpenAPI.
- Delivered React/TypeScript and Capacitor Android clients with automated tests. Packaged with Docker Compose and automated CI through GitHub Actions.

**Stack:** Java 21, Spring Boot, Spring Security, Spring Data JPA, PostgreSQL, React/TypeScript, Docker, GitHub Actions

### [EventFlow — Distributed Event-Driven Backend](https://github.com/Mr-Wolv/EventFlow_Bakr101_2026)

- Built two independently deployable Spring Boot services using Kafka, at-least-once processing, event-ID idempotency, retries, and dead-letter handling; deployed with Strimzi on Kubernetes and verified in-cluster smoke tests.
- Implemented an AWS serverless variant using SQS, Lambda (Java 21), DynamoDB, S3, IAM, and Terraform. Validated locally with LocalStack, including IAM enforcement and durable idempotency; no production AWS deployment is claimed.

**Stack:** Java 25, Spring Boot 3.5, Apache Kafka, Kubernetes, AWS, Terraform, LocalStack, GitHub Actions

### [QueryForge — PostgreSQL Performance Engineering](https://github.com/Mr-Wolv/QueryForge_Bakr101_2026)

- Built reproducible k6 benchmarks for a deterministic 1M-row PostgreSQL catalog; reduced filtered-search p95 from 8.18 s to 130 ms (~63x) at 10 req/s with a workload-shaped composite index.
- Compared OFFSET and keyset pagination, index ordering, and workloads up to 200 concurrent users; identified the 10-connection pool as the next measured bottleneck using EXPLAIN (ANALYZE, BUFFERS).

**Stack:** Java 25, Spring Boot 3.5.5, PostgreSQL 17, Docker, k6

## Languages

Arabic — Native | English — C1-level proficiency

## More work

Chess Studio and Engineering Tooling are also public for deeper technical review.

## How I work

I prefer understanding requirements and constraints before choosing an implementation. I value simple architecture, explicit tradeoffs, automated validation, reproducible workflows, and evidence over unsupported claims.

## Links

- Portfolio: https://mr-wolv.github.io/Mr-Wolv/
- LinkedIn: https://www.linkedin.com/in/muhammad-bakr-21582b3ab/
