const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => { // Prevent the default behavior of the event to disable the automatic app install prompt
    event.preventDefault();
    // Save the event for later use
    const installPromptEvent = event;
    // Display the install button or perform any other custom logic
    // For example, you can show a custom button to trigger the installation prompt
    butInstall.style.display = 'block';
  
    // Implement logic for showing the install prompt when the custom button is clicked
    butInstall.addEventListener('click', async () => {
      // Show the installation prompt
      installPromptEvent.prompt();
      // Wait for the user to respond to the prompt
      const choiceResult = await installPromptEvent.userChoice;
  
      // Check the user's choice
      if (choiceResult.outcome === 'accepted') {
        console.log('The app was installed successfully.');
      } else {
        console.log('The app installation was declined.');
      }
  
      // Clean up the event listener and hide the install button
      butInstall.removeEventListener('click');
      butInstall.style.display = 'none';
    });});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    // Hide the install button
    butInstall.style.display = 'none';
  
    try {
      // Check if the installation prompt is available
      if (window.matchMedia('(display-mode: standalone)').matches) {
        console.log('The app is already installed.');
        return;
      }
  
      // Request the installation prompt
      const installPromptEvent = await window.deferredPrompt.prompt();
      const choiceResult = await installPromptEvent.userChoice;
  
      // Check the user's choice
      if (choiceResult.outcome === 'accepted') {
        console.log('The app was installed successfully.');
      } else {
        console.log('The app installation was declined.');
      }
    } catch (error) {
      console.error('Error occurred during installation:', error);
    }
  });
  

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('The app was installed successfully.');
    const thankYouMessage = document.getElementById('thankYouMessage');
    thankYouMessage.style.display = 'block';

});
