# Bookspace (Backend)

![UML diagram](/public/images/bookspace_diagram.png)

BookSpace is a social network where users can review books and track the books they read. Book details are retrieved using
the Google Books API. 

To see a full description of BookSpace, check out the README for the frontend [here](https://github.com/johnwaalsh/bookspace#readme).

This backend is built using Javascript, Node.js, Express, Mongoose, and MongoDB. 

It stores BookSpace's data in three collections: one for users, one for reviews, and one for books. This data can be created, 
read, updated, and deleted by using various HTTP methods. CORS is also used to track sessions so multiple users can use 
BookSpace at the same time. 
