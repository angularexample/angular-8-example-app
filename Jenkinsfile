pipeline{
    
    agent any
    tools {nodejs "NODEJS"} 
    environment{
        user_env_input = "Development"
    }
    
    stages{
        
        
        stage('Which environment to build?') {
            steps {
                script {
                    def userInput = input(id: 'userInput', message: 'Deploy to?',
                    parameters: [[$class: 'ChoiceParameterDefinition', defaultValue: 'Development', 
                        description:'Environment choices', name:'denv', choices: "Development\nProduction\nTesting"]
                    ])
                    user_env_input = userInput
                    //Use this value to branch to different logic if needed
                }
            }
        }
        stage('Confirm') {
            steps {
                input("Do you want to proceed building in ${user_env_input} environment?")
            }
        }       
        
        
       
        stage("build")
        {
            steps{
            sh 'node --version'
            //sh 'npm install'
       // sh'npm install'
            sh 'ng build'
        }
        }
        stage("aws cp")
        {
            steps{
//              

// sh '''
// #!/bin/bash
// cd ${WORKSPACE}
// if [ -d dist/angular-8-example-app ]
// then
//     aws s3 cp ./dist/angular-8-example-app s3://soura-bucket-1/ --recursive
// else
//     echo “dist folder not found”
// exit 1
// fi
// '''

script{

if (user_env_input == "Production") {
    sh 'echo production env'
}

else if (user_env_input == "Testing") {
    sh '''
    #!/bin/bash
    echo Testing env
    '''
}
else {
    sh 'echo dev env'
}




            }
        }
    }
    
    }
}
