# React Pizza Parlor
The React Pizza Parlor web application project was created so that customers can order pizzas!  Customers are able to choose which pizza's they want, enter in their personal information, and place the order.

## Built With

* JavaScript
* Node
* Express
* React
* Redux
* PostgreSQL
* Bootstrap
* Material UI

## Getting Started

### Prerequisites
Before you get started, make sure you have the following software installed on your computer:

- Download this project
- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

### Create Database and Table
Make sure to create your PostgreSQL database named: `pizza_parlor`.

```SQL
CREATE TABLE "pizza" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(100) NOT NULL,
	"description" VARCHAR(1000) NOT NULL,
	"price" NUMERIC (20, 2) NOT NULL,
	"image_path" VARCHAR(1000) NOT NULL
);

CREATE TABLE "orders" (
	"id" SERIAL PRIMARY KEY,
	"customer_name" VARCHAR (1000) NOT NULL,
	"street_address" VARCHAR(1000) NOT NULL,
	"city" VARCHAR(1000) NOT NULL,
	"zip" VARCHAR(20) NOT NULL,
	"type" VARCHAR(100) NOT NULL,
	"total" NUMERIC (20, 2) NOT NULL,
	"time" TIMESTAMP DEFAULT NOW() NOT NULL
);

CREATE TABLE "line_item" (
	"id" SERIAL PRIMARY KEY,
	"order_id" INT REFERENCES "orders" ON DELETE CASCADE,
	"pizza_id" INT REFERENCES "pizza",
	"quantity" INT NOT NULL
);
```

### Installing
* Run `npm install`
* Start postgres if not running already by using `brew services start postgresql`
* Run `npm run server`
* Run `npm run client`
* Navigate to `localhost:3000`

### Author
- Phi Tran
- Cooper Miller
- Lex Chudzik
- William Harrison