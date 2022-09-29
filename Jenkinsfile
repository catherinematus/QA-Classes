pipeline {
    agent any

    options {
        ansiColor('xterm')
    }

    triggers {
        parameterizedCron('''
            # leave spaces where you want them around the parameters. They'll be trimmed.
            # we let the build run with the default name
            0 12 * * * %BROWSER=chrome;BRANCH=origin/master
            0 15 * * * %BROWSER=firefox;BRANCH=origin/master
        ''')
    }

    environment {
        BROWSER = "${params.BROWSER}"
    }

    stages {
        stage('Initiating repo...') {
            steps {
                bat 'npm install'
            }
        }
        stage('Running Axios API Tests...') {
            steps {
                catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
                    bat 'npm run api-logging'
                }
            }
        }
        stage('Running Wdio + Cucumber Tests...') {
            steps {
                catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
                    bat 'npm run wdio-cucumber'
                }
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
