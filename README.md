
#  Restaurant Management Website

A full-stack restaurant management system built using HTML, CSS, JavaScript (frontend) and Node.js with Express (backend). The system supports customer login/registration, a digital menu, and food order processing with order data stored in a local file.

---

##  Project Structure

restaurant-management/
├── about.html # About the restaurant
├── contact.html # Contact details
├── index.html # Homepage with login/signup options
├── login.html # User login page
├── register.html # User registration form
├── menu.html # Menu page showing food items
├── style.css # Styling for all pages
├── script.js # Client-side interactivity
├── server.js # Express server handling backend routes
├── test.js # Axios-based test script for placing orders
├── package.json # Project metadata and dependencies
├── package-lock.json # Dependency tree lock file
└── order_details.txt # (Generated) Stores user order details


##  Features

-  **User Authentication**
  - Register and log in with name and email
-  **About & Contact Pages**
  - Simple info pages to introduce the restaurant
-  **Menu Display**
  - Menu page listing food items and prices
-  **Order Submission**
  - Orders are sent to backend and saved in a text file (`order_details.txt`)
-  **Axios Integration**
  - Client-side order testing using Axios in `test.js`
-  **Node.js Backend**
  - Built with Express and Body-Parser
-  **File-Based Storage**
  - Orders are saved in a local `.txt` file (can later be upgraded to MySQL)


##  How to Run the Project

###  Install Dependencies

Make sure you have Node.js installed. Then, in the project folder run:

npm install

Start the Server

npm start
The server will start on: http://localhost:3000/

##  Order Test with Axios

The `test.js` script sends a test food order using Axios to the backend. You can modify the `data` object inside `test.js` to simulate different users and orders.

node test.js


This will POST order data to `http://localhost:3000/order` and save it to `order_details.txt`.



##  Sample Order Entry in `order_details.txt`

Mounyasai, 123@gmail.com, Pani Puri, 80
p.navya, navs@gmail.com, Samosa, 40
shiva, shiva@gmail.com, Dal Fry, 180


##  Future Enhancements

*  MySQL/MongoDB integration for order storage
*  Image-based menu items
*  JWT-based authentication
*  Admin panel to manage orders
*  Responsive mobile layout

## Output Screens

![Screenshot (118)](https://github.com/user-attachments/assets/bfca89e2-8bfc-4329-b4c2-da8a77c1cdfd)
![Screenshot (121)](https://github.com/user-attachments/assets/32d562e2-f328-4942-9d0f-3a91d0bc7202)
![Screenshot (155)](https://github.com/user-attachments/assets/e3656abf-2cc5-45ec-a088-8ab4b6cb9bbe)
![Screenshot (153)](https://github.com/user-attachments/assets/14bb615d-e3f6-4e80-acdf-e32d8842ce71)
![Screenshot (119)](https://github.com/user-attachments/assets/347dff4f-428c-4b7f-973d-72e0dc6e990d)
![Screenshot (120)](https://github.com/user-attachments/assets/0e9424ad-3914-4b37-9848-654f01df58bf)
![Screenshot (169)](https://github.com/user-attachments/assets/67b85d63-a408-43d5-8ba5-647538afe0dc)
![Screenshot (148)](https://github.com/user-attachments/assets/ccd5d794-8f36-4e37-9116-d41a2937291a)
![Screenshot (160)](https://github.com/user-attachments/assets/5782e43a-4db0-464a-b76f-9fe6a6281f49)
![Screenshot (159)](https://github.com/user-attachments/assets/2d9d1173-4e17-439a-9321-cb118a6e070a)
