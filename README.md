# Angular-Firebase template

Make a new project with angular and firebase in minutes.

Kitchen sink version, including:  
  * auth
  * firestore
  * realtime database
  * firebase storage

Basic angular components for:
  * login
  * profile page
  * user files

Firebase functions examples for:  
  * read with admin user
  * public "Hello world"
  * "Hello world" with logged in user

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.0-next.19.

1. install global dependencies `npm i -g firebase-tools @angular/cli@next`

2. click `Use this template` here in github and select your project name  
(if you use clone you have to do additional work, and you don´t want that)

3. `rename your new repo`

4. `git clone {your-new-repo}`

5. `cd {your new repo}`

6. `npm install`

7. (while install is running)  
 `set up a new` [Firebase](https://firebase.com) `project`  

8. click `storage` in [Firebase console](https://firebase.com) then click `Get started` and select your preferred storage region

9. click `Authentication` in [Firebase console](https://firebase.com) and enable Google under `Sign-in method`

10. scroll down and add your domain to `Authorized domains`  
(you can go back and do this later too)

10. (back to your terminal)  
run `firebase use --add` and select your firebase project

11. ng build --prod

12. firebase deploy

Your app is live!
