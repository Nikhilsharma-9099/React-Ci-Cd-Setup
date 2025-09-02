pipeline {
    agent any
    stages {
        stage('Build') {
            agent {
                docker {
                    image 'node:22-alpine3.21'
                    args '-u node' // Use a non-root user
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