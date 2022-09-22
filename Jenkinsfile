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
        stage('Running Selenium + Cucumber Tests...') {
            steps {
                bat 'mkdir selenium-cucumber\\reports'
                bat 'npm run selenium-cucumber-test'
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
                bat 'npm run selenium-cucumber-report'
                archiveArtifacts artifacts: 'selenium-cucumber/reports/*.html', fingerprint: true, onlyIfSuccessful: false
                archiveArtifacts artifacts: 'cy-e2e/cypress/assets/videos/*.mp4', fingerprint: true
                cleanWs()
            }
    }
}
