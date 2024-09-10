const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('open');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('open');
};
// Booking form validation and handling
const bookingForm = document.getElementById('tourBookingForm');

bookingForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const tour = document.getElementById('tour').value;
    const date = document.getElementById('date').value;

    // Basic validation
    if (name === '' || email === '' || phone === '' || tour === '' || date === '') {
        alert('Please fill out all fields');
        return;
    }

    // Validate phone number format (basic validation)
    if (!/^\d{10}$/.test(phone)) {
        alert('Please enter a valid 10-digit phone number');
        return;
    }

    // Display confirmation (this can be sent to a server for further processing)
    alert(`Booking successful for ${name} on ${date} for the ${tour} tour.`);

    // Reset the form
    bookingForm.reset();
});

