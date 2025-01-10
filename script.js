<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Restaurant Management</title>
    <style>
        /* Add your CSS styles here */
        .modal {
            display: none;
            position: fixed;
            z-index: 1;
            padding-top: 100px;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow: auto;
            background-color: rgba(0,0,0,0.4);
        }
        .modal-content {
            background-color: #fefefe;
            margin: auto;
            padding: 20px;
            border: 1px solid #888;
            width: 80%;
            max-width: 400px;
            text-align: center;
        }
        .modal-body {
            margin-bottom: 10px;
        }
    </style>
</head>
<body>

<!-- Your HTML content -->
<div id="food" style="width: 300px; height: 200px; border: 1px solid black;"></div>
<button id="food1" onclick="showOrderDetails('Food 1', 100)">Food 1</button>
<button id="food2" onclick="showOrderDetails('Food 2', 150)">Food 2</button>

<button onclick="openModal()">Book Table</button>

<!-- Booking Modal -->
<div id="bookingModal" class="modal">
    <div class="modal-content">
        <div id="step1">
            <label for="members">Number of members:</label>
            <input type="number" id="members" min="1" max="10">
            <button onclick="nextStep()">Next</button>
        </div>
        <div id="step2" style="display: none;">
            <label for="date">Date:</label>
            <input type="date" id="date">
            <label for="time">Time:</label>
            <input type="time" id="time">
            <button onclick="submitBooking()">Submit</button>
        </div>
    </div>
</div>

<!-- Billing Modal -->
<div id="billingModal" class="modal">
    <div class="modal-content">
        <div id="selectedItemDetails" class="modal-body"></div>
        <div id="totalCost" class="modal-body"></div>
        <button onclick="choosePaymentMethod()">Proceed to Payment</button>
    </div>
</div>

<!-- Payment Modal -->
<div id="paymentModal" class="modal">
    <div class="modal-content">
        <button onclick="enterUPI()">Pay with UPI</button>
        <button onclick="confirmOrder('Credit/Debit Card')">Pay with Credit/Debit Card</button>
    </div>
</div>

<!-- UPI Payment Modal -->
<div id="upiPaymentModal" class="modal">
    <div class="modal-content">
        <input type="text" id="upiId" placeholder="Enter UPI ID">
        <button onclick="confirmOrder('UPI')">Confirm Payment</button>
    </div>
</div>

<!-- Order Confirmation Modal -->
<div id="orderConfirmationModal" class="modal">
    <div class="modal-content">
        <h3>Order Confirmation</h3>
        <p>Your order is confirmed.</p>
        <button onclick="closeOrderConfirmationModal()">Close</button>
    </div>
</div>

<script>
    document.addEventListener('DOMContentLoaded', () => {
        let food1s = document.getElementById('food1');
        let food2s = document.getElementById('food2');
        let foods = document.getElementById('food');

        food1s.addEventListener('click', () => {
            foods.style.backgroundImage = "url('food1.png')";
        });

        food2s.addEventListener('click', () => {
            foods.style.backgroundImage = "url('food.jpg')";
        });
    });

    function openModal() {
        document.getElementById('bookingModal').style.display = 'block';
    }

    function nextStep() {
        const members = document.getElementById('members').value;
        if (members > 0 && members <= 10) {
            document.getElementById('step1').style.display = 'none';
            document.getElementById('step2').style.display = 'block';
        } else {
            alert('Please enter a number of members between 1 and 10.');
        }
    }

    function submitBooking() {
        const members = document.getElementById('members').value;
        const time = document.getElementById('time').value;
        const date = document.getElementById('date').value;

        if (members && time && date) {
            alert(`Your table is booked for ${members} members on ${date} at ${time}.`);
            closeModal();
        } else {
            alert("All fields are required to book a table.");
        }
    }

    function closeModal() {
        document.getElementById('bookingModal').style.display = 'none';
    }

    let selectedItem = {};

    function showOrderDetails(itemName, itemPrice) {
        selectedItem = {
            name: itemName,
            price: itemPrice
        };

        document.getElementById('selectedItemDetails').innerText = `Item: ${selectedItem.name}`;
        document.getElementById('totalCost').innerText = `₹${selectedItem.price}`;

        document.getElementById('billingModal').style.display = 'block';
    }
function checkUser() {
    var username = document.getElementById('username').value.trim();
    if (username === '') {
        alert('Please enter your username.');
        return;
    }

    var registeredUsernames = JSON.parse(localStorage.getItem('registeredUsernames')) || [];
    if (registeredUsernames.includes(username)) {
        // Show menu section and hide login prompt
        document.getElementById('menuSection').style.display = 'block';
        document.getElementById('loginPrompt').style.display = 'none';
    } else {
        alert('Username not found. Please register first.');
    }
}

    function choosePaymentMethod() {
        document.getElementById('billingModal').style.display = 'none';
        document.getElementById('paymentModal').style.display = 'block';
    }

    function enterUPI() {
        document.getElementById('paymentModal').style.display = 'none';
        document.getElementById('upiPaymentModal').style.display = 'block';
    }
function showOrderDetails(itemName, itemPrice) {
    selectedItem = {
        name: itemName,
        price: itemPrice
    };

    // Display billing modal with selected item details
    var billingModal = document.getElementById('billingModal');
    billingModal.style.display = 'block';
    document.getElementById('selectedItemDetails').innerText = `Item: ${selectedItem.name}`;
    document.getElementById('totalCost').innerText = `₹${selectedItem.price}`;
}


    function confirmOrder(paymentMethod) {
        const username = localStorage.getItem('currentUsername'); // Retrieve logged-in username

        if (username) {
            const orderDetails = {
                username: username,
                itemName: selectedItem.name,
                itemPrice: selectedItem.price,
                paymentMethod: paymentMethod
            };

            // Store order details in LocalStorage
            let orders = JSON.parse(localStorage.getItem('orders')) || [];
            orders.push(orderDetails);
            localStorage.setItem('orders', JSON.stringify(orders));

            // Display confirmation message
            document.getElementById('orderConfirmationModal').style.display = 'block';

            // Optionally, you can clear the selected item after confirmation
            selectedItem = {};

        } else {
            console.error('No username found. User may not be logged in.');
        }
    }

    function closeUpiPaymentModal() {
        document.getElementById('upiPaymentModal').style.display = 'none';
    }

    function closeOrderConfirmationModal() {
        document.getElementById('orderConfirmationModal').style.display = 'none';
    }

    // Close modals when clicking outside the modal content
    window.onclick = function(event) {
        var modals = document.getElementsByClassName('modal');
        for (var i = 0; i < modals.length; i++) {
            if (event.target == modals[i]) {
                modals[i].style.display = 'none';
            }
        }
    }
</script>

</body>
</html>
