// NAVBAR FIXED
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#toTop");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("hidden");
  }
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// KLIK DILUAR HAMBURGER
window,
  addEventListener("click", (e) => {
    if (e.target != hamburger && e.target != navMenu) {
      hamburger.classList.remove("hamburger-active");
      navMenu.classList.add("hidden");
    }
  });

// Dark mode Toggle
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", () => {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});


// pindahkan posisi toggle sesuai mode
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}


//   contact API
function sendMail() {
  var params = {
    from_name: document.getElementById("name").value,
    email_id: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_ilbboqk";
  const templateID = "template_df8mour";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your Message Has Been Sucessfully Sent",
        color: "#14b8a6",
        showConfirmButton: false,
        timer: 1500,
      });
    })
    .catch((err) => console.log(err));
}


// TRANSITION ANIMATION SKILLS IMAGE
const skillsImg = document.querySelectorAll('#techs-img')

skillsImg.forEach((img, i) => {
  img.dataset.aos = 'fade-down';
  img.dataset.aosDelay = i * 100;
  img.dataset.aosDuration = 1000;
})

// ANIMASI GSAP
gsap.registerPlugin(TextPlugin);
gsap.to('.lead', {duration: 2, delay: 3, text: 'College Student | Web Developer'})