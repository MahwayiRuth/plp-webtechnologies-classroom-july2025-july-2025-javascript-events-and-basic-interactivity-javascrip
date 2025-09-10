// Wait for the page to load before running scripts
document.addEventListener('DOMContentLoaded', () => {
  // Section 1: Project Details Toggle
  // Shows or hides project details when you click the button.
  // Easy way to see more info or hide it.
  const viewButton = document.getElementById('viewProjects');
  if (viewButton) {
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
  } else {
    console.log('View Projects button not found');
  }

  // Section 2: Card Highlight and Expand
  // Highlights cards when you hover. Lets you click to see details.
  // Makes it fun to explore projects.
  const cards = document.getElementsByClassName('card');
  if (cards.length > 0) {
    for (let card of cards) {
      card.addEventListener('mouseover', () => {
        card.classList.add('highlight');
      });
      card.addEventListener('mouseout', () => {
        card.classList.remove('highlight');
      });
      const expandBtn = card.querySelector('.expand-btn');
      if (expandBtn) {
        expandBtn.addEventListener('click', () => {
          card.classList.toggle('expanded');
          expandBtn.textContent = card.classList.contains('expanded') ? 'Hide Details' : 'View Details';
        });
      } else {
        console.log('Expand button not found in a card');
      }
    }
  } else {
    console.log('No cards found');
  }

  // Section 3: Welcome Message
  // Shows a welcome note for 3 seconds when you press a key.
  // A nice hello for users.
  const welcomeMessage = document.getElementById('welcomeMessage');
  if (welcomeMessage) {
    document.addEventListener('keydown', () => {
      welcomeMessage.style.display = 'block';
      setTimeout(() => {
        welcomeMessage.style.display = 'none';
      }, 3000);
    });
  } else {
    console.log('Welcome message element not found');
  }

  // Section 4: Light/Dark Mode Toggle
  // Switches between light and dark themes when you click.
  // Lets users pick their favorite look.
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      themeToggle.textContent = document.body.classList.contains('dark-mode')
        ? 'Toggle Light Mode'
        : 'Toggle Dark Mode';
    });
  } else {
    console.log('Theme Toggle button not found');
  }

  // Section 5: Form Validation
  // Checks if name, email, and remarks are correct when you submit.
  // Gives feedback if something’s wrong.
  const form = document.getElementById('contactForm');
  const feedback = document.getElementById('formFeedback');
  if (form && feedback) {
    form.addEventListener('submit', (event) => {
      event.preventDefault(); // Stop page from reloading
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const remarks = document.getElementById('remarks').value.trim();

      let isValid = true;
      let errorMessage = '';

      // Check name: Must have something and at least 2 letters
      if (name === '') {
        isValid = false;
        errorMessage = 'Name is required.';
      } else if (name.length < 2) {
        isValid = false;
        errorMessage = 'Name must be at least 2 characters.';
      }

      // Check email: Must be a valid email address
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        isValid = false;
        errorMessage = 'Please enter a valid email address.';
      }

      // Check remarks: Must have something and under 350 characters
      if (remarks === '') {
        isValid = false;
        errorMessage = 'Your Questions/Remarks are required.';
      } else if (remarks.length > 350) {
        isValid = false;
        errorMessage = 'Your Questions/Remarks must not exceed 350 characters.';
      }

      // Show feedback based on checks
      if (!isValid) {
        feedback.textContent = errorMessage;
        feedback.className = 'error';
      } else {
        feedback.textContent = 'Form submitted successfully!';
        feedback.className = 'success';
        form.reset(); // Clear the form
      }
    });
  } else {
    console.log('Form or feedback element not found');
  }

  // Section 6: Navigation Scroll
  // Moves to a section smoothly when you click a nav link.
  // Helps users jump to parts of the page easily.
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault(); // Stop normal link jump
      const targetId = link.getAttribute('href').substring(1); // Get section ID
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});