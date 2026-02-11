# WTWR (What to Wear?): Back End

The back-end project for the WTWR (What to Wear?) application provides a centralized server and API to manage user profiles and a catalog of clothing items. This project serves as the backbone for the WTWR ecosystem, handling data persistence, business logic, and future user authorization.

## Project Objectives:

- Manage Users: Retrieve user profiles and create new accounts.

- Clothing Catalog: Fetch a list of clothing items categorized by weather compatibility (hot, warm, cold).

- Item Interactions: Users can upload new clothing items to the catalog, delete items they own, and "like" or "dislike" items to save their preferences.

- Smart Filtering: Provides the necessary data for the frontend to suggest outfits based on the current weather conditions.

## Technologies and Techniques:

This project leverages a modern JavaScript stack and industry-standard practices:

- Node.js: The runtime environment used to execute JavaScript on the server.

- Express.js: The web framework used to build the RESTful API and handle routing.

- MongoDB: A NoSQL database used for flexible, document-oriented data storage.

- Mongoose: An ODM (Object Data Modeling) library used to manage data relationships, provide schema validation, and simplify database interactions.

- REST API Design: Follows standard HTTP methods (GET, POST, PUT, DELETE) and status codes for predictable communication.

- Schema Validation: Built-in data integrity checks using Mongoose schemas and the validator library.

## Running the Project

`npm run start` — to launch the server

`npm run dev` — to launch the server with the hot reload feature

### Testing

Before committing your code, make sure you edit the file `sprint.txt` in the root folder. The file `sprint.txt` should contain the number of the sprint you're currently working on. For ex. 12
