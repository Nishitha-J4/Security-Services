const counters = document.querySelectorAll('.counter');

document.addEventListener('scroll', scrollPage);
let scrollStarted = false;

function scrollPage() {
  const scrollPos = window.scrollY;
  if (scrollPos > 100 && !scrollStarted) {
    countUp();
    scrollStarted = true;
  } else if (scrollPos < 100 && scrollStarted) {
    reset();
    scrollStarted = false;
  }
}

function countUp() {
  counters.forEach((counter) => {
    counter.innerText = '0';

    const updateCounter = () => {
      // Get count target
      const target = +counter.getAttribute('data-target');

      // Get current counter value
      const c = +counter.innerText;

      // Calculate increment based on the difference between target and current value
      const increment = (target - c) / 100;

      if (c < target) {
        counter.innerText = `${Math.ceil(c + increment)}`;
        setTimeout(updateCounter, 75);
      } else {
        counter.innerText = target;
      }
    };

    updateCounter();
  });
}

function reset() {
  counters.forEach((counter) => {
    counter.innerText = '0';
  });
}
