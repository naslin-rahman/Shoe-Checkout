# assignment-1-64-naslin-rahman-1234567980-web
assignment-1-64-naslin-rahman-1234567980 created by GitHub Classroom

# Web App
A simple web application for a shoe checkout system. It is created using React JS for front end, Bootstrap for responsive design and Node Js for our backend. 

To use the app, users can type how many of each item they want in the textboxes. Then, they can decide if they want to use a promo code (“yes”) for 50% off their subtotal. They have the option of including 13% tax as well. Finally, once they are satisfied they can click submit to view their total on the next page! To start a new session please refresh the page.
Video: https://drive.google.com/file/d/1-0O6crmXh7lAfvwRYAU1RkYAIfol9Eek/view?usp=sharing
# Instructions for testing (windows)
First clone the repository. NOTE: I accidentally pushed the node_modules to our repository so please run npm install in both the client and server folders.

In one terminal, cd into the server directory and run npm start. In a separate terminal, cd into client and run npm start. You should be able to see the app by accessing http://localhost:3000 in your browser.

To run unit tests, cd into the server folder and run npm test. This will look for the test folder and run our very simple unit test for the calculateTotal function.

# Report
## Frontend (React vs Angular vs Vue)
For the frontend of our web app, we considered three options: React, Angular and Vue. React.js is considered to be more a simpler front-end framework (according to a poll on stack overflow). It is extremely useful for repeated elements (ex/ create one custom component and customize it) which will result in cleaner and more modular code. On the other hand angular is considered to be harder to learn than React and Vue as it is based on typescript. React and Vue also lets us use JSX which can be easier to use with prior knowledge of HTML/CSS.

React was developed by Facebook in 2013 but now is an open source library. It is itself a JS library. It is considered a great option for single page applications as larger applications would need additional libraries. Angular was developed by Google in 2009 and is a full fledged framework. Vue was created in 2014 so it is still relatively new compared to the other options and therefore has less users. It also uses a Virtual DOM.

All three are JavaScript frameworks and can all be used to create user interfaces for web applications. With additional libraries, we can even build mobile apps ex/ React Native, Ionic or native script.

With over 100 000 stars on GItHub, it is fair to say that React.js (74.5 %) is considered to be one of the most loved frameworks among users (according to a poll on stack overflow  2019) compared to Angular (57%) and Vue (73%). More people choose React due to its virtual DOM.

As for speed and scalability, React’s virtual DOM ensures faster performance. Angular is more complex in terms of structure and can tend to lag at times. This is due to the fact that its DOM is real time. Vue is similar to React.

In Summary, we think React and Vue have a lot more pros than Angular for our simple web app. Evidently we chose React as we had prior experience with it making our job a little bit easier. It is also a lot more popular for jobs nowadays, so using it now will be very benificial.

## Backend (Nodejs vs PHP vs ASP.net)
For our backend we decided to use Nodejs over PHP and ASP.net. We didn’t have much experience with it but since the web app does not have a database, we used the server to calculate the total price of our items. Node.js also uses JavaScript which I am very comfortable with so no additional time was needed to learn a completely new language and all of its intricacies. It also allows us to create both fast and scalable websites compared to PHP and ASP.net.

Node was created in 2009. It is one of the successful, widely-used, and popular open-source projects on this earth . Since then PHP was released in 1995 and has been used by WordPress to this day. PHP also has a substantial community and has a package for pretty much anything. ASP.net was released by Microsoft in 2002 and is continuously being upgraded. It also comes with built in Web Form controls for the UI which are similar to basic HTML elements. A user also has the option of creating their own controls for specific project needs.

As for domains, PHP is mainly used for server side scripting and dynamic web apps. Nodejs is used for event driven servers for web apps. Asp.net is primarliy for the server side of dynamic web apps.

Nodejs is a very popular software used by big companies such as Twitter, Trello, Netflix, etc. Some might even consider it to be even more popular than PHP and Asp.net. The popularity of PHP is slowly decreasing due to security issues and the rise of alternative technologies that are faster and more scalable.
NodejS is a lot faster than PHP when running applications. Node also performs better than ASP.net. 

To conclude, NodeJS was the best choice for our back end development because it is a Javascript based framework that works well with React.js and MongoDB. This is very similar to a MEAN stack which compared to a LAMP stack is better for scaling.

# CI/CD
Please refer to the mobile report as this comparison overlaps with both applications
## Databases (mySQL, MongoDB, Oracle)
We decided to not use a database for our web app. Since this app has no user register/login functionality and is only a one time use, it is not necessary to save any data other than the price of each of the items in our server.
However, if in the future we decide to use a database, we will consider these ones: MySQL, Mongo DB and Oracle.

We have very little experience with databases so NOSQL databases might be a better option. MongoDB is very document oriented and dynamic which means it stores data in JSON documents (no rigid schema).  MongoDB’s primary database model is a document store while MYSQL and Oracle primarily use Relational DBMS. For our purposes, since we would be sending over a simple form from the server, MongoDB would be the best choice.
The databases were released in 1995, 2009,1979 respectively, which shows the maturity of these databases, and that they all have a good foundation and community.
Domains covered: Both MongoDB and MySQL support an array of programming languages such C, C++, Java, Node.js,Python,PHP and many others. Both MongoDB is also available on AWS, Azure, and Google Cloud.
According to the Stack Overflow 2019 survey, 54% of their respondents used MYSQL and 35.5% for MongoDB.
MongoDB does not adhere completely to ACID (atomicity, consistency, isolation, durability), instead it supports multi-document transactions. Whereas, Oracle and MySQL use ACID transaction concepts to ensure that data doesn’t become corrupt as a result of a failure.

In summary, MongoDB would probably be the best option due to its flexibility, performance and E-commerce product catalog. Since both of our applications only require simple data storage and processing methods.



