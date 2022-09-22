pipeline {
    agent any

    environment {
        BROWSER = "${params.BROWSER}"
    }

    options {
        ansiColor('xterm')
    }

    stages {
        stage('Initiating Repo...') {
            steps {
                bat 'npm install'
            }
        }
        stage('Running Axios API Tests...') {
            steps {
                bat 'npm run api-logging'
            }
        }
        stage('Running Wdio + Cucumber Tests...') {
            steps {
                bat 'npm run wdio-cucumber'
            }
        }
        stage('Running Cypress Tests...') {
            steps {
                bat "npx cypress run --browser ${params.BROWSER} --config-file=./cy-e2e/cypress.config.ts"
            }
        }
    }

    post {
            always {
                archiveArtifacts artifacts: 'axios-winston/report/**/*.*', fingerprint: true
                archiveArtifacts artifacts: 'cy-e2e/cypress/assets/html-report/**/*.*', fingerprint: true
                cleanWs()
            }
    }
}
