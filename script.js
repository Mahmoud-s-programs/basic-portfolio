document.getElementById('toggleVisibilityBtn').addEventListener('click', toggleVisibility);
document.getElementById('changeColorBtn').addEventListener('click', changeBackgroundColor);

// Function to change the background color of the "contact me" section
function changeBackgroundColor() {
    const aboutSection = document.getElementById('contact');
    // Check if the section already has the new background color
    if (aboutSection.style.backgroundColor === 'black') {
        aboutSection.style.backgroundColor = ''; // Reset to default
    } else {
        aboutSection.style.backgroundColor = 'black'; // Change color
    }
}

// Function to toggle the visibility of the "Contact Me" form container
function toggleVisibility() {
    const contactFormContainer = document.getElementById('contactFormContainer');
    if (contactFormContainer.style.display === 'none') {
        contactFormContainer.style.display = 'block'; // Make visible
    } else {
        contactFormContainer.style.display = 'none'; // Hide
    }
}


document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Get form fields
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();

    // Validate fields
    var isValid = true; // Flag to track validation status
    // Check if name is empty
    if (!name) {
        alert('Name is required.');
        isValid = false;
    }
    // Check if email is empty or invalid
    if (!email || !validateEmail(email)) {
        alert('A valid email is required.');
        isValid = false;
    }
    // Check if message is empty
    if (!message) {
        alert('Message is required.');
        isValid = false;
    }
    // If validation fails, prevent form submission
    if (!isValid) {
        event.preventDefault();
    } else {
        // Form is valid
        console.log('Form is valid. Submitting...');
    }
});
// Function to validate email format
function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

var images = [
    { src: "skills/c.png", caption: "C programming" },
    { src: "skills/css.png", caption: "CSS" },
    { src: "skills/docker.png", caption: "Docker" },
    { src: "skills/git.png", caption: "Git" },
    { src: "skills/html.png", caption: "HTML" },
    { src: "skills/java.png", caption: "Java" },
    { src: "skills/javascript.png", caption: "JavaScript" },
    { src: "skills/nodejs.png", caption: "NodeJS" },
    { src: "skills/python.png", caption: "Python" },
    { src: "skills/reactjs.png", caption: "ReactJS" },
    { src: "skills/redux.png", caption: "Redux" },
    { src: "skills/sql.png", caption: "SQL" },
    { src: "skills/tailwind.png", caption: "Tailwind" },
    { src: "skills/typescript.png", caption: "TypeScript" },
];
var currentIndex = 0;

document.getElementById('nextButton').addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % images.length; // Cycle to next image
    updateSlider();
});

document.getElementById('prevButton').addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Cycle to previous image
    updateSlider();
});

function updateSlider() {
    document.getElementById('sliderImage').src = images[currentIndex].src;
    document.getElementById('sliderImage').alt = images[currentIndex].caption;
    document.getElementById('imageCaption').innerText = images[currentIndex].caption;
}

