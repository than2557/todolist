pipeline {
    agent any
    stages {
        steps("Clone Git Repository") {
           
                git(
                    url: "https://github.com/than2557/todolist.git",
                    branch: "master",
                    changelog: true,
                    poll: true,
                     
                )
                echo 'Git Clone complete'
          
        }
        steps("install package npm"){
        
            sh :'npm install'
            echo :'install package npm complete'
           
    
        }
        steps("build package"){
         
            sh :'npm run build'
            echo :'build package complete'
       
    
        }
         steps("serve"){
         
            sh :'npm install serve -g'
            echo :'npm install serve complete'
        
    
        }
    }
}