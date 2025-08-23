
# **MERN Stack Portfolio**

### A full-stack, responsive portfolio website to showcase my skills and projects, built with the MERN stack.

This project is a dynamic, full-stack portfolio designed to highlight my work as a developer. Unlike a static site, this application uses a MongoDB database to manage and serve project and contact information, making it easy to update without touching the code.


## **✨Features**

* **Full-Stack Architecture:** Separated frontend (React) and backend (Node.js/Express) for a modular and scalable application.
* **Dynamic Content:** Project details and other information are stored in a MongoDB database, allowing for easy updates.
* **RESTful API:** A well-structured API serves data from the database to the React frontend.
* **Responsive Design:** A clean, modern UI that adapts to various screen sizes.
* **Contact Form:** Submissions are handled by the backend and saved to the database.

## **Project Structure**
The project is divided into two main directories:

- **Server:** Contains the server-side code, including API routes, models, controllers, and configuration files.​

- **Client:** Contains the client-side code built with React.js, including components, contexts, and pages.




## 🚀Tech Stack

* **React:** A JavaScript library for building the user interface.
* **React Router:** For navigation and routing within the single-page application.
* **Axios:** A promise-based HTTP client for making API calls.
* **Tailwind CSS:** For a utility-first approach to styling and responsive design.

**Backend**

* **Node.js & Express.js:** The server environment and framework for handling requests.
* **MongoDB:** A NoSQL database for storing data.
* **Mongoose:** An elegant MongoDB object modeling tool for Node.js.
* **CORS:** A Node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
## **🛠️Installation Guide**

**Prerequisites**

Ensure you have the following installed:
- Node.js (latest stable version)
- npm or yarn

**To set up the project locally, follow these steps:**

1. Clone the Repository
```bash
git clone https://github.com/abhishekkesharwani914/Portfolio.git

```
2. Backend Setup
- Navigate to the Backend directory:
```bash
cd Portfolio/Server
```
- Install the required Dependencies
```bash
npm install  # or yarn install
```
- Create a .env file in the Backend directory and configure the necessary environment variables, such as database connection strings and SMTP user and passwords.
- Start the backend server
```bash
node server.js
```
3. Frontend Setup
Navigate to the Frontend/KalaKriti directory:
```bash
cd Client
```
- Install the required Dependencies
```bash
npm install 
```
- Start the frontend server
```bash
npm run dev or npm start
```
4. Access the Application

- Open your browser and navigate to http://localhost:5173 to explore the application.
## **Environment Variables**

To run this project, you will need to add the following environment variables to your .env file

**Backend .env requirement**

+ MONGO_DB
`MONGO_SECRET_KEY`

+ SMTP (Brevo) Configuration and Keys
`SMTP_USER`
`SMTP_PASSWORD`
`SENDER_MAIL`

+ Client Url
`FRONTEND_URL`

**Frontend .env requirement**

- Backend Url
`BACKEND_URL`



## **🤝Contributing**

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)


## **🚀Deployment**

- Modify the vite.config.js file if necessary to configure aliases correctly.
- Frontend is deployed on vercel.
- Backend is deployed on render.

[GitHub Project link🔗](https://github.com/abhishekkesharwani914/Portfolio)

[Live Project🔗](https://portfolio-eta-inky-70.vercel.app/)
## 🔗 Links
- [GitHub](https://github.com/abhishekkesharwani914)

- [linkedin](https://www.linkedin.com/in/abhishek-kesharwani-5019b4215/)


