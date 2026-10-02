# Muhammad Bakr - Junior Backend Developer

Recent Computer Science graduate focused on backend engineering with Java/Spring Boot, PostgreSQL, distributed systems, and practical cloud engineering.

## Core stack

- **Programming:** Java, Python, C++, C#, JavaScript, SQL
- **Additional skills:** Linux, Algorithms, AI-assisted software development (agentic workflows).
- **Backend:** Spring Boot, Spring Security, Spring Data JPA, Hibernate, REST APIs
- **Data:** PostgreSQL, Oracle SQL/PLSQL, MongoDB
- **Systems & Cloud:** Apache Kafka, Event-Driven Architecture, Kubernetes, AWS services (SQS, Lambda, DynamoDB, S3, IAM; locally validated with LocalStack), Terraform
- **Testing & Delivery:** JUnit 5, Mockito, Testcontainers, OpenAPI/Swagger, Docker, Docker Compose, GitHub Actions, CI/CD, Maven, Flyway
- **Frontend:** React, TypeScript, Vite

## Problem Solving

[LeetCode](https://leetcode.com/u/Mr_Wolv/) and [Repo](https://github.com/Mr-Wolv/LeetCode_Bakr101_2024)

## Projects

### [MerHouse](https://github.com/Mr-Wolv/MerHouseSuite_Bakr101_2026)
Built a role-aware B2B fulfillment platform for merchants, warehouse providers, and platform operators. Implemented tenant-aware Spring Boot REST APIs with Spring Security and PostgreSQL, covering inventory, orders, allocation, fulfillment, shipments, and service accountability. Delivered React/TypeScript and Capacitor Android clients with automated tests, Docker Compose, and GitHub Actions CI.

**Stack:** Java 21, Spring Boot, Spring Security, Spring Data JPA, PostgreSQL, React/TypeScript, Docker, GitHub Actions

### [EventFlow](https://github.com/Mr-Wolv/EventFlow_Bakr101_2026)
Distributed event-driven backend with two independently deployable Spring Boot services, Kafka-based asynchronous processing, at-least-once delivery, idempotency, retry and dead-letter handling, and Kubernetes deployment through Strimzi.

It also includes an AWS serverless variant using SQS, Lambda, DynamoDB, S3, IAM, and Terraform. The AWS path is integration-tested locally with LocalStack, including enforced IAM, duplicate-delivery validation, durable idempotency, and automated CI verification. No production AWS deployment is claimed.

**Stack:** Java 25, Spring Boot 3.5, Apache Kafka, Kubernetes, AWS SQS/Lambda/DynamoDB/S3, Terraform, LocalStack, Docker, GitHub Actions

### [QueryForge](https://github.com/Mr-Wolv/QueryForge_Bakr101_2026)
PostgreSQL performance-engineering service built around reproducible k6 experiments on a deterministic 1M-row catalog. A workload-shaped composite index reduced filtered-search p95 from 8.18 s to 130 ms (~63×) at 10 req/s. Also compared OFFSET and keyset pagination, index ordering, and concurrency up to 200 users with `EXPLAIN (ANALYZE, BUFFERS)`.

**Stack:** Java 25, Spring Boot, PostgreSQL 17, Docker, k6

## More work

Chess Studio and Engineering Tooling are also public for deeper technical review.

## How I work

I prefer understanding requirements and constraints before choosing an implementation. I value simple architecture, explicit tradeoffs, automated validation, reproducible workflows, and evidence over unsupported claims.

## Links

- Portfolio: https://mr-wolv.github.io/Mr-Wolv/
- LinkedIn: https://www.linkedin.com/in/muhammad-bakr-21582b3ab/
