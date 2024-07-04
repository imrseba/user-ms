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

    stage('Build image') {
      steps{
        script {
          dockerImage = docker.build dockerimagename
        }
      }
    }

    stage('Pushing Image') {
      environment {
               registryCredential = 'dockerhublogin'
           }
      steps{
        script {
          docker.withRegistry( 'https://registry.hub.docker.com', registryCredential ) {
            dockerImage.push("latest")
          }
        }
      }
    }

    stage('Deploying App to Minikube') {
    steps {
      script {
        if (!fileExists('user-ms/deploymentservice.yaml')) {
          error("El archivo user-ms/deploymentservice.yaml no existe")
        }

        sh 'kubectl config use-context <context-name> || true'
        sh 'kubectl delete -f user-ms/deploymentservice.yaml || true'
        sh 'kubectl apply -f user-ms/deploymentservice.yaml'
      }
    }
  }

  }

}
