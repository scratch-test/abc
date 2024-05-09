document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('reservationForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        // Get form data
        const source = document.getElementById('source').value;
        const destination = document.getElementById('destination').value;
        const date = document.getElementById('date').value;
        const timing = document.getElementById('timing').value;
        const ticketClass = document.getElementById('class').value;
        const transport = document.getElementById('transport').value;
        const seats = document.getElementById('seats').value;
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const paymentMethod = document.getElementById('paymentMethod').value;
        const card = document.getElementById('card').value;

        // Validate form data
        if (!source || !destination || !date || !timing || !ticketClass || !transport || !seats || !name || !email || !paymentMethod || !card) {
            alert('Please fill in all fields');
            return;
        }

        // Make booking (simulate)
        const bookingDetails = {
            source,
            destination,
            date,
            timing,
            ticketClass,
            transport,
            seats,
            name,
            email,
            paymentMethod,
            card
        };

        // Display reservation details
        const reservationDetails = document.getElementById('reservationDetails');
        reservationDetails.innerHTML = `
            <h2>Reservation Details</h2>
            <p><strong>Source:</strong> ${bookingDetails.source}</p>
            <p><strong>Destination:</strong> ${bookingDetails.destination}</p>
            <p><strong>Date:</strong> ${bookingDetails.date}</p>
            <p><strong>Timing:</strong> ${bookingDetails.timing}</p>
            <p><strong>Class:</strong> ${bookingDetails.ticketClass}</p>
            <p><strong>Mode of Transport:</strong> ${bookingDetails.transport}</p>
            <p><strong>Number of Seats:</strong> ${bookingDetails.seats}</p>
            <h2>Passenger Details</h2>
            <p><strong>Name:</strong> ${bookingDetails.name}</p>
            <p><strong>Email:</strong> ${bookingDetails.email}</p>
            <h2>Payment</h2>
            <p><strong>Payment Method:</strong> ${bookingDetails.paymentMethod}</p>
            <p><strong>Card Number:</strong> ${bookingDetails.card}</p>
        `;

        // You can add further functionality like sending this data to a server for processing
    });

    // Populate options dynamically (you can fetch this data from a server)
    const timings = ['10:00 AM', '12:00 PM', '02:00 PM', '04:00 PM'];
    const classes = ['Economy', 'Business', 'First Class'];
    const transports = ['Train', 'Bus', 'Flight'];
    const paymentMethods = ['Credit Card', 'Debit Card', 'PayPal'];

    const timingSelect = document.getElementById('timing');
    const classSelect = document.getElementById('class');
    const transportSelect = document.getElementById('transport');
    const paymentMethodSelect = document.getElementById('paymentMethod');

    timings.forEach(timing => {
        const option = document.createElement('option');
        option.text = timing;
        timingSelect.add(option);
    });

    classes.forEach(ticketClass => {
        const option = document.createElement('option');
        option.text = ticketClass;
        classSelect.add(option);
    });

    transports.forEach(transport => {
        const option = document.createElement('option');
        option.text = transport;
        transportSelect.add(option);
    });

    paymentMethods.forEach(paymentMethod => {
        const option = document.createElement('option');
        option.text = paymentMethod;
        paymentMethodSelect.add(option);
    });
});
