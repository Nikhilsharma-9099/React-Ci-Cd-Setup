pipeline {
    agent any

    environment {
        MY_VAR = 'my value'
        NODE_ENV = 'production'
        VERCEL_TOKEN = credentials('VERCEL_TOKEN')
    }

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
                    ls -l
                    npm --version
                    node --version
                    npm install --include=dev
                    npm run build 
                    ls -l
                '''
            }            
                
        }

        stage('Test') {
            agent {
                docker {
                    image 'node:22.19-alpine3.22' 
                    args '-u root'
                    reuseNode true
                }
            }

            steps {
                sh '''
                    npm run test
                    test -f dist/index.html
                '''
            }            
                
        }

        stage('Deploy') {
            agent {
                docker {
                    image 'node:22.19-alpine3.22' 
                    args '-u root'
                    reuseNode true
                }
            }

            steps {
                sh '''
                    npm install vercel -g
                    echo $MY_VAR
                    vercel --prod --token=$VERCEL_TOKEN --confirm --name=cicdproject
                '''
            }            
                
        }
    }
}