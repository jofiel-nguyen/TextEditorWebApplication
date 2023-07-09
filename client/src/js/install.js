const butInstall = document.getElementById('buttonInstall');
let deferredPrompt;

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the default behavior
  event.preventDefault();
  
  // Store the event for later use
  // This allows you to trigger the installation prompt manually
  deferredPrompt = event;
  
  // Update the UI to show the install button
  butInstall.style.display = 'block';
});

// Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  // Check if the deferredPrompt is available
  if (deferredPrompt) {
    // Show the installation prompt
    deferredPrompt.prompt();
    
    // Wait for the user to respond to the prompt
    const result = await deferredPrompt.userChoice;
    
    // Reset the deferredPrompt variable
    deferredPrompt = null;
    
    // Handle the result of the prompt (e.g., show a success message)
    if (result.outcome === 'accepted') {
      console.log('App installed successfully!');
    } else {
      console.log('App installation canceled.');
    }
    
    // Hide the install button
    butInstall.style.display = 'none';
  }
});

// Add a handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  // Perform any necessary actions when the app is successfully installed
  console.log('App installed!');
});
