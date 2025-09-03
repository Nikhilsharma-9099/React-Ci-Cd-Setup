pipeline {
    agent any
    options{
        skipDefaultCheckout(true)
    }
    stages {

        stage('Clean up Ws'){
            steps{
                cleanWs()
            }
        }

        stage('Checkout using SCM') {
            steps {
                checkout scm
            }
        }

        
        stage('Build') {
            agent {
                docker {
                    image 'node:22.19-alpine3.22' 
                    args '-u root'
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