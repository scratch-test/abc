// Function to save data to local storage and navigate to passenger details page
function saveAndContinue() {
    var journeyDetails = {
        from: document.getElementById('from').value,
        to: document.getElementById('to').value,
        date: document.getElementById('date').value
    };
    localStorage.setItem('journeyDetails', JSON.stringify(journeyDetails));
    window.location.href = 'passenger-details.html';
}

// Function to save passenger details to local storage and navigate to confirmation page
function saveAndConfirm() {
    var passengerDetails = {
        name: document.getElementById('name').value,
        age: document.getElementById('age').value,
        gender: document.getElementById('gender').value
    };
    localStorage.setItem('passengerDetails', JSON.stringify(passengerDetails));
    window.location.href = 'confirmation.html';
}

// Function to display details on confirmation page
function displayDetails() {
    var journeyDetails = JSON.parse(localStorage.getItem('journeyDetails'));
    var passengerDetails = JSON.parse(localStorage.getItem('passengerDetails'));
    if (journeyDetails && passengerDetails) {
        var detailsContainer = document.getElementById('details');
        var detailsHTML = '<p><strong>From:</strong> ' + journeyDetails.from + '</p>' +
                          '<p><strong>To:</strong> ' + journeyDetails.to + '</p>' +
                          '<p><strong>Date:</strong> ' + journeyDetails.date + '</p>' +
                          '<p><strong>Name:</strong> ' + passengerDetails.name + '</p>' +
                          '<p><strong>Age:</strong> ' + passengerDetails.age + '</p>' +
                          '<p><strong>Gender:</strong> ' + passengerDetails.gender + '</p>';
        detailsContainer.innerHTML = detailsHTML;
    } else {
        alert("Some data is missing.");
    }
}

// Call the function when the page loads
window.onload = displayDetails;
