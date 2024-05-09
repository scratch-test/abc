document.getElementById('applyForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    
    // Perform credit card application processing here (not implemented in this example)

    // Display application status
    document.getElementById('applicationStatus').innerHTML = "Application submitted successfully!";
    // You can also show error messages if the application fails
});
