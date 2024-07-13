



# Online Nursery Website

## Introduction

Your Ultimate Plant Store - Discover, Filter, and Buy Plants Effortlessly

## Project Description

The project is an e-commerce web application dedicated to plant enthusiasts. It aims to provide users with a seamless experience to explore, filter, and purchase a wide variety of plants. Whether you're looking for outdoor plants, blooms, orchids, house plants, or pet-friendly plants, this application has got you covered.

Purpose and Goals:

- Purpose: To offer a user-friendly platform where customers can search, filter, and buy plants online.
- Goals:
Provide detailed information about each plant.
Enable users to filter plants based on categories, price, and ratings.
Ensure a smooth and efficient purchasing process.

## Features

- Product Listing: Display all available plants with images, titles, prices, and ratings.
- Search and Filter:
  - Search plants by name.
  - Filter plants by categories such as outdoor plants, blooms, orchids, house plants, and pet-friendly plants.
  - Filter plants by price range.
- Product Rating: Display ratings in stars, including half-stars.
- Pagination: Navigate through product pages easily.
- Responsive Design: Ensure the application is accessible on various devices.

## Technology Stack

- Frontend:
  - React
  - TypeScript
  - Redux Toolkit
  - RTK Query
  - Stripe
  - React Router Dom
  - Tailwind CSS
  - Framer-motion
  - react-icons
  - Sonner
- Backend:
  - TypeScript
  - Node.js
  - Express
  - MongoDB
  - Mongoose
- Others:
  - Postman (for API testing)
  - Git (version control)

## Installation Guideline

Installation guideline is coming ahead.

### Prerequisites

- Node.js
- npm or yarn
- MongoDB
- TypeScript
- Express.js

### Installation Steps

1. Clone the Repository
```bash
git clone https://github.com/Raiyan109/Online-nursery-website-fe.git
cd Online-nursery-website-fe
```
2. Install dependencies
```bash
npm install
# or
yarn install
```
3. Run the Application:
```bash
npm run dev
```

### Configuration

1. Create a `.env` file in the root directory of the project.
2. Add necessary configuration variables in the `.env` file.
   Example:
   ```bash
    PORT=5000
    DB_URL=your_db_connection_uri
    NODE_ENV=development
    STRIPE_PUBLISHABLE_KEY=your_key
    STRIPE_SECRET_KEY=your_key
   ```


## Usage

Once the application is running, you can:

1. Browse Products:

  - Visit the homepage to see all the available plants.
  - Use the search bar to find specific plants by name.

2. Filter Products:

  - Use category buttons to filter plants by specific categories.
  - Adjust the price range slider to filter plants within a specific price range.

3. View Product Details:

  - Click on a product to view detailed information, including the rating.

4. Pagination:

  - Navigate through different pages to explore more plants.

5. Cart: 
  - You can add an item to cart
  - Also you can pay with stripe
