# Muhammad Bakr - Backend Developer

Backend developer focused on Java/Spring Boot, PostgreSQL, distributed systems, and practical cloud engineering.

## Core stack

- **Backend:** Java, Spring Boot, Spring Security, Spring Data JPA, REST APIs
- **Data:** PostgreSQL, Oracle SQL/PLSQL, MongoDB, SQL
- **Distributed systems:** Microservices, Apache Kafka, Event-Driven Architecture, Kubernetes
- **Cloud & infrastructure:** AWS (SQS, Lambda, DynamoDB, S3, IAM), Terraform, LocalStack
- **Engineering:** Docker, GitHub Actions, CI/CD, Maven, Flyway, JUnit, Mockito, Testcontainers
- **Frontend:** React, TypeScript, Vite
- **Programming:** Java, Python, C++, C#, JavaScript, SQL

## Projects

### [MerHouse](https://github.com/Mr-Wolv/MerHouseSuite_Bakr101_2026)
Built a role-aware B2B fulfillment platform connecting merchants, warehouse providers, and platform operators across inventory, inbound stock, order creation/import, allocation, fulfillment, exceptions, shipments, notifications, and service accountability.

Implemented Spring Boot REST APIs with validation, Spring Security authentication/authorization, tenant-aware access control, PostgreSQL persistence, Flyway migrations, transactional outbox, inventory locking, partial allocation/backorders, shipment state transitions, and OpenAPI.

Delivered React/TypeScript web and Capacitor Android surfaces with automated backend/frontend tests, Docker Compose, GitHub Actions CI, browser and native route verification, and documented deployment and quality workflows.

**Stack:** Java 21, Spring Boot, Spring Security, Spring Data JPA, PostgreSQL, React/TypeScript, Docker, GitHub Actions

### [EventFlow](https://github.com/Mr-Wolv/EventFlow_Bakr101_2026)
Distributed event-driven backend with two independently deployable Spring Boot services, Kafka-based asynchronous processing, at-least-once delivery, idempotency, retry and dead-letter handling, and Kubernetes deployment through Strimzi.

It also includes an AWS serverless variant using SQS, Lambda, DynamoDB, S3, IAM, and Terraform. The AWS path is integration-tested locally with LocalStack, including enforced IAM, duplicate-delivery validation, durable idempotency, and automated CI verification. No production AWS deployment is claimed.

**Stack:** Java 25, Spring Boot 3.5, Apache Kafka, Kubernetes, AWS SQS/Lambda/DynamoDB/S3, Terraform, LocalStack, Docker, GitHub Actions

### [QueryForge](https://github.com/Mr-Wolv/QueryForge_Bakr101_2026)
PostgreSQL performance-engineering service built to run controlled, reproducible experiments against a 1M-row catalog.

Measured dataset scaling, query-plan behavior, workload-shaped indexing, OFFSET vs keyset pagination, index-ordering alternatives, and concurrency saturation using k6 and `EXPLAIN (ANALYZE, BUFFERS)`.

**Stack:** Java 25, Spring Boot, PostgreSQL 17, Docker, k6

## More work

Wordle Strat-Console, Chess Studio, and Engineering Tooling remain public on GitHub for deeper technical review.

## How I work

I prefer understanding requirements and constraints before choosing an implementation. I value simple architecture, explicit tradeoffs, automated validation, reproducible workflows, and evidence over unsupported claims.

## Links

- Portfolio: https://mr-wolv.github.io/Mr-Wolv/
- LinkedIn: https://www.linkedin.com/in/muhammad-bakr-21582b3ab/
