const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the default prompt from showing
  event.preventDefault();
  // Save the event for later use
  const deferredPrompt = event;
  
  // Update UI to notify the user about the installability
  butInstall.style.display = 'block';
  
  // TODO: Implement a click event handler on the `butInstall` element
  butInstall.addEventListener('click', async () => {
    // Show the install prompt when the button is clicked
    deferredPrompt.prompt();
    
    // Wait for the user to respond to the prompt
    const choiceResult = await deferredPrompt.userChoice;
    
    // Check the user's choice
    if (choiceResult.outcome === 'accepted') {
      console.log('User accepted the install prompt');
    } else {
      console.log('User dismissed the install prompt');
    }
    
    // Clean up the event and UI
    butInstall.style.display = 'none';
    deferredPrompt = null;
  });
});

// TODO: Add a handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  console.log('App installed');
});
