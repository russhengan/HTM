document.addEventListener('DOMContentLoaded', () => {
    const enterBtn = document.getElementById('enterBtn');
    const mainContent = document.getElementById('mainContent');
    const landing = document.querySelector('.landing');
    const greeting = document.getElementById('greeting');
    const letterContent = document.getElementById('letterContent');
    const revealSecret = document.getElementById('revealSecret');
    const secretText = document.getElementById('secretText');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const closeBtn = document.querySelector('.close');
  
  
    // Animate the greeting text on load
    gsap.to("#greeting", { duration: 1.5, opacity: 1, y: 0, ease: "power2.out" });
  
    // Show main content on button click
    enterBtn.addEventListener('click', () => {
      gsap.to(landing, {
        duration: 1,
        opacity: 0,
        onComplete: () => {
          landing.style.display = 'none';
          mainContent.style.display = 'block';
          gsap.from(mainContent, { duration: 1, opacity: 0 });
          animateLoveLetter();
        }
      });
    });
  
    // Simulate handwriting effect for the love letter
    function animateLoveLetter() {
        const message = "Hi Babi, Happy 3rd Monthsary! I am very sorry if sometimes nagkakaroon tayo ng conflict and lately nagkaroon tayo na tulad kagabi na nag lead sa hindi mo pag pansin sa akin and etc. I want to say sorry kasi i am selfish and hindi kita kaagad naisip nung gabing iyon. And I hope na ma-gustuhan mo to love!❤️";
        let index = 0;
        letterContent.innerHTML = "";
      
        function typeLetter() {
          if (index < message.length) {
            let span = document.createElement("span");
            span.textContent = message.charAt(index);
            letterContent.appendChild(span);
            gsap.from(span, { duration: 0.3, opacity: 0, y: -10 });
            
            if (message.charAt(index) === " ") {
              span.innerHTML = "&nbsp;"; // Fix spacing issue
            }
      
            index++;
            setTimeout(typeLetter, 80);
          }
        }
        typeLetter();
      }
      
  
    // Reveal secret message on button click
    revealSecret.addEventListener('click', () => {
      if (secretText.style.display === 'none') {
        gsap.to(secretText, {
          duration: 0.5,
          opacity: 1,
          onStart: () => {
            secretText.style.display = 'block';
          }
        });
      }
    });
  
    // Open lightbox when a gallery image is clicked
    galleryItems.forEach(item => {
      item.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = item.src;
        gsap.from(lightboxImg, { duration: 0.5, scale: 0.5, opacity: 0 });
      });
    });
  
    // Close lightbox when the close button is clicked
    closeBtn.addEventListener('click', () => {
      gsap.to(lightbox, {
        duration: 0.5,
        opacity: 0,
        onComplete: () => {
          lightbox.style.display = 'none';
          lightbox.style.opacity = 1;
        }
      });
    });
  });
  

  function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.classList.add("floating-heart");
    document.body.appendChild(heart);
  
    const x = Math.random() * window.innerWidth;
    const duration = Math.random() * 3 + 2;
  
    gsap.set(heart, { left: x, opacity: 0 });
    gsap.to(heart, { duration: duration, y: -200, opacity: 1, onComplete: () => heart.remove() });
  }
  
  document.getElementById("revealSecret").addEventListener("click", () => {
    secretText.style.display = "block";
    gsap.from(secretText, { duration: 1, opacity: 0, scale: 0.8 });
  
    for (let i = 0; i < 10; i++) {
      setTimeout(createHeart, i * 300);
    }
  });
  

  window.addEventListener("scroll", () => {
    const finalMessage = document.getElementById("finalMessage");
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
      finalMessage.style.display = "block";
      gsap.from(finalMessage, { duration: 1, opacity: 0, scale: 0.8 });
    }
  });
  