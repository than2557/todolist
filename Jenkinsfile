pipeline {
    agent any
    stages {
        stage("Clone Git Repository") {
            steps{
                
                sh 'cd ..'
                sh 'cd ..'
                sh 'cd ..'
            }
           steps{
             dir("/software") {
                git(
                    url: "https://github.com/than2557/todolist.git",
                    branch: "master",
                    changelog: true,
                    poll: true,
                     
                )
                echo 'Git Clone complete'
             }
              
           }
        }
        stage("install package npm"){
             steps{
            sh 'npm i install'
            echo 'install package npm complete'
        }
        }
       stage("build package"){
        steps{
            sh 'npm run build'
            echo 'build package complete'
        }
       }
    }
}