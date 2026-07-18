# 🚀 Project 04 - Jenkins CI/CD Pipeline for Dockerized Portfolio

## 📌 Overview

This project demonstrates a complete Continuous Integration and Continuous Deployment (CI/CD) pipeline using Jenkins.

The pipeline automatically pulls the latest source code from GitHub, builds a Docker image, deploys the application using Docker Compose, and verifies the deployment.

This project showcases practical DevOps automation using Jenkins, Docker, GitHub, and Docker Compose.

---

## 🛠 Technologies Used

- Jenkins
- Docker
- Docker Compose
- Git
- GitHub
- Nginx
- Linux (Ubuntu)

---

## 📂 Project Structure

```
Project-04-Jenkins/
│
├── Dockerfile
├── docker-compose.yml
├── Jenkinsfile
├── README.md
├── docker/
│   └── nginx.conf
├── website/
├── screenshots/
└── diagrams/
```

---

## 🚀 CI/CD Pipeline Workflow

1. Developer pushes code to GitHub.
2. Jenkins pulls the latest source code.
3. Jenkins builds the Docker image.
4. Jenkins deploys the container using Docker Compose.
5. Jenkins verifies the deployment.
6. Updated application becomes available automatically.

---

## 🔄 Pipeline Stages

- Checkout Source Code
- Build Docker Image
- Deploy Container
- Verify Deployment

---

## ▶️ How to Run

### Clone Repository

```bash
git clone https://github.com/usamakhalid212/Project-04-Jenkins.git
```

### Go into Project

```bash
cd Project-04-Jenkins
```

### Start Application

```bash
docker compose up -d
```

### Open Browser

```
http://localhost:8080
```

*(If Jenkins is using port 8080 on your machine, use the port configured in your local `docker-compose.yml`, such as `8081`.)*

---

## 📸 Screenshots

- Jenkins Dashboard
- Successful Pipeline
- Stage View
- Console Output
- Running Docker Container
- Portfolio Website

---

## 🎯 Skills Demonstrated

- CI/CD Pipeline
- Jenkins Declarative Pipeline
- Docker Automation
- Docker Compose
- GitHub Integration
- Continuous Deployment
- Linux

---

## 📚 What I Learned

- Writing Declarative Jenkins Pipelines
- Integrating Jenkins with GitHub
- Automating Docker deployments
- Debugging CI/CD pipeline failures
- Verifying deployments automatically

---

## 👨‍💻 Author

**Usama Khalid**

Aspiring DevOps Engineer

Portfolio:
https://usamakhalid212.github.io/

LinkedIn:
https://www.linkedin.com/in/usama-khalid-0034532b2/

GitHub:
https://github.com/usamakhalid212
