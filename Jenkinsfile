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
}


