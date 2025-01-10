// Import the axios library
const axios = require('axios');

// Define the data to send
const data = {
  username: 'Mounyasai',
  email: '123@gmail.com',
  food_item: 'Pani Puri',
  price: 80
};
const data = {
  username: 'p.navya',
  email: 'navs@gmail.com',
  food_item: 'Samosa',
  price: 40
};
const data = {
  username: 'shiva',
  email: 'shiva@gmail.com',
  food_item: 'Dal Fry',
  price: 180
};

// Send a POST request
axios.post('http://localhost:3000/order', data)
  .then(response => {
    console.log('Response from server:', response.data);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
