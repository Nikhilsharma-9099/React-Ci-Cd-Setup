pipeline {
    agent any
    stages {

        stage('Clean up Ws'){
            steps{
                cleanWs()
            }
        }

        stage('Checkout') {
            steps {
                git 'https://github.com/Nikhilsharma-9099/React-Ci-Cd-Setup.git'
            }
        }

        
        stage('Build') {
            agent {
                docker {
                    image 'node:22.19-alpine3.22' 
                    reuseNode true
                }
            }

            steps {
                sh '''
                    npm --version
                    node --version
                    npm install || { echo "npm install failed"; exit 1; }
                    npm run build || { echo "npm run build failed"; exit 1; }
                '''
            }            
                
        }
    }
}