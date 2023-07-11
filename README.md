### Text Editor Web Application
This is a project that showcases your skills in building a text editor that runs in the browser. The application is a single-page application that meets the Progressive Web App (PWA) criteria. It incorporates various data persistence techniques to ensure reliability and redundancy, even when offline.

## Installation and Setup
To get started with the text editor application, follow these steps:

Clone the repository to your local machine.
Navigate to the root directory of the project.
Run npm install to install the necessary dependencies.
Run npm run start to start up the backend and serve the client.
User Story
css
```md
AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use
```
## Acceptance Criteria
The following criteria should be met by the text editor web application:

When the application is opened in an editor, it should have a client-server folder structure.
Running npm run start from the root directory should start the backend and serve the client.
JavaScript files should be bundled using webpack when running the text editor application from the terminal.
Webpack plugins should generate an HTML file, service worker, and a manifest file.
The text editor should still function without errors even when using next-gen JavaScript.
Opening the text editor should immediately create a database storage using IndexedDB.
When content is entered and the DOM window is clicked off, the content should be saved with IndexedDB.
Closing and reopening the text editor should retrieve the previously saved content from IndexedDB.
Clicking the Install button should download the web application as an icon on the desktop.
Loading the web application should register a service worker using Workbox.
Registering a service worker should pre-cache static assets upon loading, including subsequent pages and static assets.
Proper build scripts for a webpack application should be in place for deployment to Heroku.
## Deployment
The application can be deployed to Heroku using the Heroku Deployment Guide on The Full-Stack Blog.<br>
This is heroku link: https://pwaapps-6193e22597e4.herokuapp.com/<br>
![Deployed picture](./Assets/00-demo.gif)