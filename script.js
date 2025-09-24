document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.popup__form');
  const button = form.querySelector('.button');

  // Right-side image load handling
  const artImg = document.querySelector('.art__img');
  const artFallback = document.querySelector('.art__fallback');
  if (artImg && artFallback) {
    const showImage = () => { artImg.style.opacity = '1'; artFallback.style.opacity = '0'; };
    const showFallback = () => { artImg.style.opacity = '0'; artFallback.style.opacity = '1'; };

    // Start with fallback visible until image confirms
    showFallback();

    if (artImg.complete) {
      if (artImg.naturalWidth > 0) { showImage(); } else { showFallback(); }
    } else {
      artImg.addEventListener('load', showImage);
      artImg.addEventListener('error', showFallback);
    }
  }

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



