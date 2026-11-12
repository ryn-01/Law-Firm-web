document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('form[data-form="contact"]');
  forms.forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const submitButton = form.querySelector('button[type="submit"]');
      if (submitButton) {
        submitButton.textContent = 'Message Sent';
        submitButton.disabled = true;
      }
    });
  });
});
