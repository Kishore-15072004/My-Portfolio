// Custom cursor effect
const cursor = document.createElement("div");
cursor.classList.add("custom-cursor");
document.body.appendChild(cursor);

const cursorInner = document.createElement("div");
cursorInner.classList.add("cursor-inner");
document.body.appendChild(cursorInner);

document.addEventListener("mousemove", (e) => {
  cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
  cursorInner.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
});

document.addEventListener("mousedown", () => {
  cursor.classList.add("click");
  cursorInner.classList.add("click");
});

document.addEventListener("mouseup", () => {
  cursor.classList.remove("click");
  cursorInner.classList.remove("click");
});

// Hover effect for links and buttons
const hoverElements = document.querySelectorAll(
  "a, button, .project-card, .skill-pill"
);
hoverElements.forEach((element) => {
  element.addEventListener("mouseenter", () => {
    cursor.classList.add("hover");
    cursorInner.classList.add("hover");
  });
  element.addEventListener("mouseleave", () => {
    cursor.classList.remove("hover");
    cursorInner.classList.remove("hover");
  });
});

// Mobile Menu Toggle
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Scroll to Top Button
const scrollToTopButton = document.getElementById("scroll-to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    scrollToTopButton.classList.add("visible");
  } else {
    scrollToTopButton.classList.remove("visible");
  }
});

scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });

      // Close mobile menu if open
      if (!mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.add("hidden");
      }
    }
  });
});

// Form submission
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // This is a demo form - in a real application, you would send this data to a server
  alert(`Thank you for your message, ${name}! I'll get back to you soon.`);
  contactForm.reset();
});

// Animation on scroll
function animateOnScroll() {
  const elements = document.querySelectorAll(
    ".animate-slide-up, .animate-slide-right, .animate-slide-left, .animate-fade-in, .reveal"
  );

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 100) {
      if (element.classList.contains("reveal")) {
        element.classList.add("active");
      } else {
        element.style.animationPlayState = "running";
      }
    }
  });
}

// Initial check and add scroll listener
window.addEventListener("load", animateOnScroll);
window.addEventListener("scroll", animateOnScroll);

// Add reveal class to sections for scroll animation
document.querySelectorAll("section").forEach((section) => {
  if (
    !section.classList.contains("animate-slide-up") &&
    !section.classList.contains("animate-slide-right") &&
    !section.classList.contains("animate-slide-left") &&
    !section.classList.contains("animate-fade-in")
  ) {
    section.classList.add("reveal");
  }
});

// Progress bar animation
function animateProgressBars() {
  const progressBars = document.querySelectorAll(".progress-fill");

  progressBars.forEach((bar) => {
    const width = bar.style.width;
    bar.style.width = "0";

    setTimeout(() => {
      bar.style.width = width;
    }, 300);
  });
}

// Trigger progress bar animation when skills section is in view
const skillsSection = document.getElementById("skills");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateProgressBars();
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

observer.observe(skillsSection);

(function () {
  function c() {
    var b = a.contentDocument || a.contentWindow.document;
    if (b) {
      var d = b.createElement("script");
      d.innerHTML =
        "window.__CF$cv$params={r:'95de6e89501d7ef7',t:'MTc1MjMwMTE5Ni4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
      b.getElementsByTagName("head")[0].appendChild(d);
    }
  }
  if (document.body) {
    var a = document.createElement("iframe");
    a.height = 1;
    a.width = 1;
    a.style.position = "absolute";
    a.style.top = 0;
    a.style.left = 0;
    a.style.border = "none";
    a.style.visibility = "hidden";
    document.body.appendChild(a);
    if ("loading" !== document.readyState) c();
    else if (window.addEventListener)
      document.addEventListener("DOMContentLoaded", c);
    else {
      var e = document.onreadystatechange || function () {};
      document.onreadystatechange = function (b) {
        e(b);
        "loading" !== document.readyState &&
          ((document.onreadystatechange = e), c());
      };
    }
  }
})();
