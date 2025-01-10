const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route to save order details
app.post('/order', (req, res) => {
    const { username, email, food_item, price } = req.body;
    const orderDetails = `${username}, ${email}, ${food_item}, ${price}\n`;
    const filePath = 'C:/Users/chiduralas/Desktop/restaurant-management/order_details.txt';

    fs.appendFile(filePath, orderDetails, (err) => {
        if (err) {
            console.error('Failed to save order details to file:', err);
            return res.status(500).send('Failed to save order details.');
        }
        console.log('Order details saved to file.');
        res.send('Order details saved successfully.');
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
