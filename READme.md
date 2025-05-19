# Quora Posts – Node.js Web App

Quora Posts is a full-stack web application built with **Node.js**, **Express.js**, and **EJS** that simulates a simplified version of the Quora platform. Users can create, view, edit, and delete posts — all in a clean, responsive UI.

## 📌 Features

- 📝 Create and submit posts with a username and content
- 🔍 View detailed content of each post
- ✏️ Edit existing posts using PATCH method
- 🗑️ Delete posts securely using method override
- 📱 Fully responsive UI for all devices

## Technologies Used

### Frontend:
- **HTML5** – Structure of the app
- **CSS3** – Styling with modern UI principles
- **Responsive Design** – Media queries for mobile & tablet optimization

### Backend:
- **Node.js** – Runtime environment
- **Express.js** – Web framework for routing and middleware
- **EJS** – Embedded JavaScript templating engine
- **method-override** – For enabling PUT and DELETE in forms
- **UUID** – To generate unique IDs for each post

## Project Structure

/views
├─ index.ejs # Displays all posts
├─ new.ejs # Form to create new posts
├─ show.ejs # View individual post details
├─ edit.ejs # Form to edit existing posts
/public
├─ style.css # CSS styles
index.js # Main server file
package.json # Project metadata and dependencies

## How to Run

1. Clone the repository  
2. Run `npm install` to install dependencies (npm install express ejs uuid method-override)
3. Run `node index.js` to start the server or you can use `nodemon` for restart the server
4. Open `http://localhost:8080/posts` in your browser

---

## API Routes Overview

| Method  | Route            | Description               |
|---------|------------------|---------------------------|
| GET     | `/posts`         | List all posts            |
| GET     | `/posts/new`     | Form to create a new post |
| POST    | `/posts`         | Create a new post         |
| GET     | `/posts/:id`     | View a single post        |
| GET     | `/posts/:id/edit`| Form to edit a post       |
| PATCH   | `/posts/:id`     | Update a post             |
| DELETE  | `/posts/:id`     | Delete a post             |

---

## Contact

For questions or feedback, please contact the project maintainer.

