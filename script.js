document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.popup__form');
  const button = form.querySelector('.button');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    form.classList.add('was-submitted');

    const data = Object.fromEntries(new FormData(form).entries());

    if (!data.name || !data.email) {
      alert('Please fill out your name and email.');
      return;
    }

    const originalLabel = button.textContent;
    button.disabled = true;
    button.textContent = 'Joining…';

    try {
      // Simulate request latency
      await new Promise((r) => setTimeout(r, 900));

      button.textContent = 'Added to waitlist ✔';
      button.style.background = '#1f9350';
      form.reset();
    } catch (err) {
      console.error(err);
      alert('Something went wrong. Please try again.');
      button.textContent = originalLabel;
    } finally {
      button.disabled = false;
      setTimeout(() => {
        button.textContent = originalLabel;
        button.style.background = '';
        form.classList.remove('was-submitted');
      }, 2200);
    }
  });
});



