
  // Sidebar navigations
  
  document.querySelectorAll('.sidebar nav ul li a').forEach(a => {
    a.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelectorAll('.sidebar nav ul li a').forEach(x => x.classList.remove('active'));
      this.classList.add('active');
      document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Skills animations
  window.addEventListener('scroll', () => {
    document.querySelectorAll('.progress').forEach(bar => {
      if (!bar.style.width) {
        const rect = bar.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          bar.style.width = bar.getAttribute('data-width');
        }
      }
    });
  });

  // Typewriter for Home
  const line1Text = "Hello, I'm Ayushi Shah";
  const line2Text = "A creative Web developer & designer.";
  let i = 0, j = 0;
  function typeLine1() {
    if (i < line1Text.length) {
      document.getElementById("line1").textContent += line1Text.charAt(i);
      i++;
      setTimeout(typeLine1, 80);
    } else {
      setTimeout(typeLine2, 400);
    }
  }
  function typeLine2() {
    if (j < line2Text.length) {
      document.getElementById("line2").textContent += line2Text.charAt(j);
      j++;
      setTimeout(typeLine2, 60);
    }
  }

  window.onload = () => {
    typeLine1();
  };

