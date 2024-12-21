document.getElementById('toggleButton').addEventListener('click', () => {
    const navbarLinks = document.getElementById('navbarLinks');
    navbarLinks.classList.toggle('active');
});

// Get elements
const modal = document.getElementById('modalForm');
const bookNowButton = document.getElementById('bookNowButton');
const closeModal = document.getElementById('closeModal');

// Open the modal
bookNowButton.addEventListener('click', () => {
    modal.style.display = 'flex';
});

// Close the modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
// Get form and modal elements
const bookingForm = document.getElementById('bookingForm');
const apiUrl = 'https://script.google.com/macros/s/AKfycbxZoQbM84_KQK-Ht-Nm09gw9cTKkTo23rIir7YDiXo9D2idifey60ek3NhTkZ2okWlR/exec'; // Your Google Apps Script URL

// Handle form submission
bookingForm.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const service = document.getElementById('service').value;

    // Send data to the API
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, service }), // Pass form data as JSON
        });

        if (response.ok) {
            alert('Booking submitted successfully!');
            bookingForm.reset(); // Reset the form
            document.getElementById('modalForm').style.display = 'none'; // Close the modal
        } else {
            alert('There was an error submitting your booking. Please try again.');
        }
    } catch (error) {
        alert('Error connecting to the server. Please try again later.');
        console.error('Submission Error:', error);
    }
});


// JavaScript to handle the click event
document.getElementById("myBook").addEventListener("click", function() 
{
    window.location.href = '/booking.html';
});


 
