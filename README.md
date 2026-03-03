# WTWR (What to Wear?): Back End

The back-end project for the WTWR (What to Wear?) application provides a centralized server and API to manage user profiles and a catalog of clothing items. This project serves as the backbone for the WTWR ecosystem, handling data persistence, business logic, and future user authorization.

## Project Objectives:

- Manage Users: Retrieve user profiles and create new accounts.

- Clothing Catalog: Fetch a list of clothing items categorized by weather compatibility (hot, warm, cold).

- Item Interactions: Users can upload new clothing items to the catalog, delete items they own, and "like" or "dislike" items to save their preferences.

- Smart Filtering: Provides the necessary data for the frontend to suggest outfits based on the current weather conditions.

- Secure User Management: Robust Sign-Up and Sign-In flows featuring encrypted credentials and persistent sessions.

- Strict Authorization: A "Gatekeeper" architecture ensures users can only modify or delete their own clothing items and profile data.

## Technologies and Techniques:

This project leverages a modern JavaScript stack and industry-standard practices:

- Node.js & Express.js: The core runtime and framework for high-performance asynchronous routing.

- JWT (JSON Web Tokens): Secure, stateless user authentication for session management.

- Bcryptjs: Industry-standard password hashing to ensure credentials are never stored in plaintext.

- MongoDB & Mongoose: NoSQL data persistence with strict Object Data Modeling (ODM).

- Middleware Flow: Strategic ordering of routes ensures public data (GET) remains accessible while modification routes (POST/DELETE) are locked behind the auth middleware.

- Helmet: Secures HTTP headers to prevent cross-site scripting and other injections.

- Express-Rate-Limit: Protects the infrastructure from Denial of Service (DoS) and brute-force attempts.

## Running the Project

`npm run start` — to launch the server

`npm run dev` — to launch the server with the hot reload feature

## Project Pitch & Walkthrough

Check out [this video](https://drive.google.com/file/d/1frPiQeuYHyohDdc326U3YVCbNnIjJ2ld/view?usp=sharing), where I describe my project and some challenges I faced while building it.

### Testing

- Postman: Comprehensive test suites covering 100+ scenarios including edge cases for authorization and duplicate data.

- GitHub Actions: Automated CI/CD testing ensuring that all commits pass the required security and logic benchmarks.
