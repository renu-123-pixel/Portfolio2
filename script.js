document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scrolling
    const links = document.querySelectorAll('nav ul li a');
    for (const link of links) {
        link.addEventListener('click', smoothScroll);
    }

    function smoothScroll(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 60,
            behavior: 'smooth'
        });
    }

    // Responsive Navigation
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('nav ul');
    
    navToggle.addEventListener('click', () => {
        nav.classList.toggle('nav-open');
    });

    // Form Validation
    const form = document.querySelector('form');
    form.addEventListener('submit', validateForm);

    function validateForm(e) {
        e.preventDefault();
        const name = document.querySelector('input[name="name"]').value;
        const email = document.querySelector('input[name="email"]').value;
        const message = document.querySelector('textarea[name="message"]').value;
        
        if (!name || !email || !message) {
            alert('Please fill out all fields');
            return;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address');
            return;
        }

        // Simulate form submission
        alert('Form submitted successfully!');
        form.reset();
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    const message = document.getElementById("right-message");
   const container = document.querySelector(".container2");

    container.addEventListener("mousemove", function(e) {
    const bounds = container.getBoundingClientRect();
    const distanceFromRight = bounds.right - e.clientX;

    if (distanceFromRight < 50) {
      message.style.display = "block";
    } else {
      message.style.display = "none";
    }
  });

  container.addEventListener("mouseleave", function() {
    message.style.display = "none";
  });

    document.getElementById("project1").addEventListener("click", function (e) {
    // Prevent redirect when clicking the APK download link
    if (e.target.tagName.toLowerCase() === 'a') return;
    
    window.open("https://github.com/renu-123-pixel/Movie-app", "_blank");
  });

  document.getElementById("project2").addEventListener("click", function (e) {
    // Prevent redirect when clicking the APK download link
    if (e.target.tagName.toLowerCase() === 'a') return;
    
    window.open("https://github.com/renu-123-pixel/RealTimeEdgeDetection.git", "_blank");
  });

  document.getElementById("project3").addEventListener("click", function (e) {
    // Prevent redirect when clicking the APK download link
    if (e.target.tagName.toLowerCase() === 'a') return;
    
    window.open("https://github.com/renu-123-pixel/GuessTheNumber-android-.git", "_blank");
  });

const faders = document.querySelectorAll('.myProject');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2
});

faders.forEach(el => observer.observe(el));

const form = document.querySelector("form");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const res = await fetch(form.action, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" }
    });
    if (res.ok) {
      alert("Thanks! Your message has been sent.");
      form.reset();
    } else {
      alert("Oops! Something went wrong.");
    }
  });
  

});


  