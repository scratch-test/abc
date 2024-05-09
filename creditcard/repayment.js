document.getElementById('repaymentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var cardNumber = document.getElementById('cardNumber').value;
    var amount = document.getElementById('amount').value;
    
    // Perform repayment processing here (not implemented in this example)

    // Display transaction status
    document.getElementById('transactionStatus').innerHTML = "Repayment processed successfully!";
    // You can also show error messages if the repayment fails
});
