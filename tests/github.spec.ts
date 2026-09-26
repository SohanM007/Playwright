//Understanding Gitub Actions and Workflows ::

/*
Github/bitbucket/github == these are used for version control and CI/CD pipeline

Version control tools are used to manage the change in the code and keep track of these changes.

github/bitbucket are the one mostly used by tester.
Github is web based version control used by Devops pipeline setup and by dev team.

>>Download git from the browser. -google download git -click on the first link and download the git for your system.
>>create an account on the github.

//Assume there is no branch present in the repository ::
 1. Login to github >> Create new repository
 2.Open the terminal in the vs and perform below actions
     > git init
     > git add .
     > git commit -m "first commit"
     > git branch -M main
     > git remote add origin https://github.com/SohanM007/Playwright.git
     > git push -u origin main (push all the changes to the main branch)

     //There is already and github account created and you need to clone it.
     //for practice purpose we have to branch :-
         1. Main branch 
         2. your local branch.
     //IN organization there are 3 branches
     Local branch >> main branch >> develop branch

  When branch is already created follow the below steps ::
  1.clone the repository in your local system(laptop).
     git clone <repository url>    //goto github >> click on the code >> copy the url and paste it in the terminal.
     git clone https://github.com/SohanM007/Playwright.git
  2. After clone is completed,we need to install below dependencies in the vs code terminal ::
     npm install
     npm  init playwright
  3. Now make the changes in the code and push it to the github repository.
     *** you never push the code directly to the main branch. 
     first you need to create a new branch inside the local system using below command ::
     git checkout -b <branch name>  //create a new branch and switch to that branch.
     git checkout -b TestPWFrameWork
  4. check id the branch is created or not using below command ::
      git branch
  5. Now make some changes to the code and push the changes to the github repository using below command ::
  6. git status  //check the status of the file
  7. git add .  //add the changes to the staging area
  8. git commit -m "new changes"   //commit the changes to the local repository
  9. git push          //push the changes to the remote repository
     on the above line you will get one recommended command to push the changes to the remote repository. copy that command and paste it in the terminal.
  10. Now go to the github repository and check if the changes are reflected or not.
  11. Now create a pull request to merge the changes to the main branch.
  12. After the pull request is created, you need to wait for the approval from the team lead or manager.
  13. Once the pull request is approved, you can merge the changes to the main branch.
       





*/
