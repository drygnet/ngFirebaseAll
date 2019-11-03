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
  * read/write db with admin user
  * public "Hello world"

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.0-next.19.

0. install global dependencies `npm i -g firebase-tools @angular/cli@next`

0. click `Use this template` here on github and select your project name  
(if you use clone you have to do additional work, and you don´t want that)

0. `git clone {your-new-repo}`

0. `cd {your new repo}`

0. `npm install`

0. (while install is running)  
 `set up a new` [Firebase](https://console.firebase.google.com/) `project`  

0. click `storage` in [Firebase console](https://console.firebase.google.com/) then click `Get started` and select your preferred storage region

0. click `Authentication` in [Firebase console](https://console.firebase.google.com/) and enable Google under `Sign-in method`

0. scroll down and add your domain to `Authorized domains`  
(you can go back and do this later too)

0. click `database` and create a `Cloud firestore` database in prod mode

0. goto `project overview` and click `add app` and select `web`

0. Select a name for your app  
(don´t select hosting here, you can do that later)

0. copy the __content__ of the firebaseConfig-object and paste it in the /src/environments/firebase.ts file in your local project

0. (back to your terminal)  
run `firebase use --add` and select your firebase project

0. ng build --prod

0. firebase deploy

Your app is live!
