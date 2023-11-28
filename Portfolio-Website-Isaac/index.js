
/* Nav bar */ 
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav_link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open')
    })
})

/* Back to top button */
/*
const backToTopButton = document.querySelector("back_to_top_btn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
    if (window.pageYOffset > 300) {
        backToTopButton.style.display = "block";
    }
    else{
        backToTopButton.style.display = "none";
    }
}

backToTopButton.addEventListener("click", backToTop);

function backToTop() {
    window.scrollTo(0, 0);
}
*/

/* Contact form */ 
function sendEmail() {
    Email.send({
    Host : "smtp.gmail.com",
    Username : "clararasslan@gmail.com",
    Password : "tiremamo7",
    To : 'clararasslan@gmail.com',
    From : document.getElementById("email").value,
    Subject : "New Contact Form Enquiry",
    Body : "Name: " + document.getElementById("name").value
        + "<br> Email: " + document.getElementById("email").value
        + "<br> Message: " + document.getElementById("message").value
  }).then(
  message => alert("Thanks ! Your message is sent.")
  );
} 