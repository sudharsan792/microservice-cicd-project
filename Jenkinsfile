pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Product Docker Image') {
            steps {
                sh 'docker build -t product-service ./product-service'
            }
        }

        stage('Build Cart Docker Image') {
            steps {
                sh 'docker build -t cart-service ./cart-service'
            }
        }

        stage('Push Docker Images') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'docker-cred',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {
                    sh '''
                        echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin

                        docker tag product-service "$DOCKER_USER/product-service:build-${BUILD_NUMBER}"
                        docker tag product-service "$DOCKER_USER/product-service:latest"

                        docker tag cart-service "$DOCKER_USER/cart-service:build-${BUILD_NUMBER}"
                        docker tag cart-service "$DOCKER_USER/cart-service:latest"

                        docker push "$DOCKER_USER/product-service:build-${BUILD_NUMBER}"
                        docker push "$DOCKER_USER/product-service:latest"

                        docker push "$DOCKER_USER/cart-service:build-${BUILD_NUMBER}"
                        docker push "$DOCKER_USER/cart-service:latest"
                    '''
                }
            }
        }

        stage('Deploy to EKS') {
            steps {
                sh '''
                    kubectl apply -f k8s/deployment.yml
                    kubectl apply -f k8s/service.yml

                    kubectl apply -f k8s/cart/deployment.yml
                    kubectl apply -f k8s/cart/service.yml
                '''
            }
        }
    }
}
