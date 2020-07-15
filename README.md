# Bookstore website

Functional Requirements:

Users must be authenticated & authorized to be able to access the website.
A user is be able to search books.
A user is be able to add book into shopping cart.
A user is be able to place an order in the cart.
A user is be able to see the order history and check status.

Non-Functional Requirements:

Front-end code - React.
Server-side code - Php.
Database - MySQL

Database:

Download xampp and start MySQL and Apache services.
Enable localhost over SSH.
Create database using phpmyadmin in localhost.

Client Side:

Install NodeJS https://nodejs.org/en/
Create folder inside the htdocs of xampp for the frontend code part.
Install React using -> npm install -g create-react-app
Create project using -> create-react-app projectname
In terminal, cd projectname then start the server using -> npm start
Install bootstrap framework for UI framework using -> npm install bootstrap --save
Install vanilla bootstrap for customizing the sass file using -> npm install react-bootstrap bootstrap
Install React router module to enable router service using -> npm install --save react-router-dom
For users authentication & authorization using Axios to send API calls and handle JWT tokens.


Server-side:

Create folder inside htdocs of xampp for php code part.
Building the PHP application that implements the JWT-protected REST API.
Install composer globally
For Authentication: Install the php-jwt library using Composer in your root folder --> composer require firebase/php-jwt
For Password reset mail: Install the PHPMailer using composer --> composer require phpmailer/phpmailer
Inorder to use the php mailer to send mail to your account without authentication issue, turn on the setting of "Access for less secure apps" in your security section of google account.
