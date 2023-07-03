pipeline {
    agent any
    stages {
        stage("Clone Git Repository") {
           steps{
                git(
                    url: "https://github.com/than2557/todolist.git",
                    branch: "master",
                    changelog: true,
                    poll: true,
                     
                )
                echo 'Git Clone complete'
           }
        }
        stage("install package npm"){
             steps{
            sh 'npm install'
            echo 'install package npm complete'
        }
        }
       stage("build package"){
        steps{
            sh 'npm run build'
            echo 'build package complete'
        }
       }
       stage("serve todolist"){
        steps{
            sh 'nohup serve -s dist &'
            echo 'serve package complete'
        }
       }
    }
}