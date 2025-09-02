pipeline {
    agent any
    stages {

        stage('Clean up Ws'){
            steps{
                cleanWs()
            }
        }

        
        stage('Build') {
            agent {
                docker {
                    image 'node:22.19-alpine3.22'
                    args '-u node:node' // Use a non-root user
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

            post {
                success {
                    // Archive build artifacts (adjust path as per your project)
                    archiveArtifacts artifacts: 'dist/**', fingerprint: true
                }
            }
            
                
        }
    }
}