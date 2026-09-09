# Microservice CI/CD Project
E-commerce microservices project using Jenkins, Docker, Kubernetes and AWS EKS.

A containerized E-commerce application built using microservices architecture and automated using Jenkins CI/CD.

## 🚀 Project Overview

This project demonstrates how a frontend application and product backend service can be containerized using Docker and deployed on AWS EC2 through Jenkins.

## 🛠️ Technologies Used

- HTML / CSS / JavaScript
- Python
- Flask
- Docker
- Nginx
- Jenkins
- AWS EC2
- Git & GitHub

## 🏗️ Architecture

User
 ↓
Frontend (Nginx)
 ↓
Product Service (Flask API)
 ↓
Docker Containers
 ↓
AWS EC2

## ✨ Features

- Product listing
- Product images
- Product categories
- Product prices
- Add to Cart functionality
- REST API based product service
- Docker containerization
- Jenkins CI/CD deployment
- GitHub webhook integration

## 🔄 CI/CD Pipeline

1. Developer pushes code to GitHub
2. GitHub webhook triggers Jenkins
3. Jenkins pulls the latest code
4. Docker image is built
5. Application containers are deployed
6. Updated application is available on AWS EC2

## 🐳 Docker

The application uses separate Docker containers for:

- Frontend
- Product Service

## ☁️ Deployment

The application is deployed on an AWS EC2 instance using Docker.

## 📂 Project Structure

microservice-cicd-project/
│
├── frontend/
│   ├── src/
│   ├── Dockerfile
│   └── nginx.conf
│
├── product-service/
│   ├── app.py
│   ├── Dockerfile
│   └── requirements.txt
│
├── Jenkinsfile
└── README.md

## 👨‍💻 Author

Sudharsan S
