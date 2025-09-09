// Wait for the DOM to fully load before running scripts
document.addEventListener('DOMContentLoaded', () => {
  // Section 1: Project Details Toggle (Click Event)
  // Toggles the visibility of project details when the "View Projects" button is clicked
  const viewButton = document.getElementById('viewProjects');
  const projectCards = document.getElementById('projectCards');
  let isVisible = false;

  viewButton.addEventListener('click', () => {
    isVisible = !isVisible;
    const details = projectCards.getElementsByClassName('project-details');
    for (let detail of details) {
      detail.style.display = isVisible ? 'block' : 'none';
    }
    viewButton.textContent = isVisible ? 'Hide Projects' : 'View Projects';
  });

  // Section 2: Card Highlight (Mouseover/Mouseout Events)
  // Highlights a project card on mouseover and removes highlight on mouseout
  const cards = document.getElementsByClassName('card');
  for (let card of cards) {
    card.addEventListener('mouseover', () => {
      card.classList.add('highlight');
    });
    card.addEventListener('mouseout', () => {
      card.classList.remove('highlight');
    });
  }

  // Section 3: Welcome Message (Keyboard Event)
  // Displays a welcome message for 3 seconds when any key is pressed
  const welcomeMessage = document.getElementById('welcomeMessage');
  document.addEventListener('keydown', () => {
    welcomeMessage.style.display = 'block';
    setTimeout(() => {
      welcomeMessage.style.display = 'none';
    }, 3000);
  });

  // Section 4: Light/Dark Mode Toggle (Click Event)
  // Toggles between light and dark themes, updating the button text
  const themeToggle = document.getElementById('themeToggle');
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggle.textContent = document.body.classList.contains('dark-mode')
      ? 'Toggle Light Mode'
      : 'Toggle Dark Mode';
  });

  // Section 5: Custom Form Validation (Submit Event)
  // Validates form input (name, email, password) with custom logic and provides feedback
  const form = document.getElementById('contactForm');
  const feedback = document.getElementById('formFeedback');

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent page reload
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    let isValid = true;
    let errorMessage = '';

    // Name validation: Must be non-empty and at least 2 characters
    if (name === '') {
      isValid = false;
      errorMessage = 'Name is required.';
    } else if (name.length < 2) {
      isValid = false;
      errorMessage = 'Name must be at least 2 characters.';
    }

    // Email validation: Uses regex for basic email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      isValid = false;
      errorMessage = 'Please enter a valid email address.';
    }

    // Password validation: At least 6 characters with a letter and a number
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if (!passwordRegex.test(password)) {
      isValid = false;
      errorMessage = 'Password must be at least 6 characters with a letter and a number.';
    }

    // Display feedback based on validation
    if (!isValid) {
      feedback.textContent = errorMessage;
      feedback.className = 'error';
    } else {
      feedback.textContent = 'Form submitted successfully!';
      feedback.className = 'success';
      form.reset(); // Clear form
    }
  });
});
