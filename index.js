// Write your code in this file!
const currentUser = "Edward";
const firstInitial = currentUser[0];

const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

const excitedWelcomeMessage = `WELCOME TO FLATBOOK, ${currentUser.toUpperCase()}!`;

//const shortGreeting = `Welcome, ${firstInitial}!`;
const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;
