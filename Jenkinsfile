pipeline {
    environment {
        dockerimagename = "imrseba/ms-user"
        dockerImage = ""
    }

    agent any

    stages {
        stage('Checkout Source') {
            steps {
                git branch: 'main', url: 'https://github.com/imrseba/user-ms.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }

        stage('Unit Tests') {
            steps {
                script {
                    sh 'npm run test'
                }
            }
            post {
                always {
                    junit '**/unit-test-results.xml'
                }
            }
        }

        stage('E2E Tests') {
            steps {
                script {
                    sh 'npm run test:e2e'
                }
            }
            post {
                always {
                    junit '**/e2e-test-results.xml'
                }
            }
        }

        stage('Test Coverage') {
            steps {
                script {
                    sh 'npm run test:cov'
                }
            }
            post {
                always {
                    publishHTML(target: [
                        reportDir: 'coverage',
                        reportFiles: 'index.html',
                        reportName: 'Test Coverage Report'
                    ])
                }
            }
        }

        stage('Build Image') {
            steps {
                script {
                    dockerImage = docker.build(dockerimagename)
                }
            }
        }

        stage('Pushing Image') {
            environment {
                registryCredential = 'dockerhublogin'
            }
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', registryCredential) {
                        dockerImage.push("latest")
                    }
                }
            }
        }

        stage('Deploying App to Minikube') {
            steps {
                script {
                    withEnv(["KUBECONFIG=/var/lib/jenkins/.kube/config"]) {
                        sh 'kubectl apply -f deploymentservice.yaml --validate=false'
                    }
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}


