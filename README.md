# Text Editor Web Application

![Demo](./Assets/00-demo.gif)

This project is a demonstration of a text editor web application that operates within a browser environment. It's a single-page application designed to meet Progressive Web App (PWA) criteria, integrating various data persistence techniques to ensure reliability and redundancy, even when offline.

## Installation and Setup

To get started with the text editor application, follow these steps:

1. Clone the repository to your local machine.
   ```bash
   git clone https://github.com/nhunguyen-debug/PWA-From-Rice.git
   ```

2. Navigate to the root directory of the project.
   ```bash
   cd PWA-From-Rice
   ```

3. Install the necessary dependencies.
   ```bash
   npm install
   ```

4. Start the backend and serve the client.
   ```bash
   npm run start
   ```

## User Story

```markdown
AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use
```

## Acceptance Criteria

The following criteria should be met by the text editor web application:

- The application should have a client-server folder structure.
- Running `npm run start` from the root directory should start the backend and serve the client.
- JavaScript files should be bundled using webpack when running the text editor application from the terminal.
- Webpack plugins should generate an HTML file, service worker, and a manifest file.
- The text editor should still function without errors even when using next-gen JavaScript.
- Opening the text editor should immediately create a database storage using IndexedDB.
- When content is entered and the DOM window is clicked off, the content should be saved with IndexedDB.
- Closing and reopening the text editor should retrieve the previously saved content from IndexedDB.
- Clicking the Install button should download the web application as an icon on the desktop.
- Loading the web application should register a service worker using Workbox.
- Registering a service worker should pre-cache static assets upon loading, including subsequent pages and static assets.
- Proper build scripts for a webpack application should be in place for deployment to Heroku.

## Deployment

The application can be deployed to Heroku using the Heroku Deployment Guide on [The Full-Stack Blog](https://yourbloglink.com).

[Heroku Deployment Guide](https://yourbloglink.com/heroku-deployment-guide)

**Heroku Link:** [https://pwaapps-6193e22597e4.herokuapp.com/](https://pwaapps-6193e22597e4.herokuapp.com/)

**GitHub Repository:** [https://github.com/nhunguyen-debug/PWA-From-Rice.git](https://github.com/nhunguyen-debug/PWA-From-Rice.git)

Feel free to explore, contribute, or use this project as a reference for your own text editor web application development. If you have any questions or feedback, please don't hesitate to open an issue or reach out to us. Enjoy using the Text Editor Web Application!
