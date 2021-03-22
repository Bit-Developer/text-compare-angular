pipeline {
    agent any
    tools { nodejs "NodeJs" }
    stages {
        stage('Install & Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Create Image') {
            steps {
                sh 'docker build -t jojozhuang/text-compare .'
                sh 'docker push jojozhuang/text-compare'
            }
        }
        stage('Deploy') {
            steps {
                sh 'docker rm $(docker stop $(docker ps -a -q --filter="name=text-compare"))'
                sh 'docker run --name text-compare -p 12010:80 -d jojozhuang/text-compare'
            }
        }
    }
}