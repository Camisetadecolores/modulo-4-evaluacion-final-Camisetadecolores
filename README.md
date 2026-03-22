*** This is NOT a shop ***
Fullstack project built with Node.js, Express, MySQL and EJS.
A not-so-conventional shop where products are not exactly what they seem… 

* Description
This project simulates a complete online store with:
- Product catalog
- Individual product detail page
- Functional shopping cart
- Admin panel

*** All wrapped in a creative concept with a custom visual style***

* Tech Stack
- Node.js
- Express
- MySQL
- EJS
- SCSS (BEM + mobile first)

* FEATURES

** Shop
- Product listing
- Category filters
- Sorting (price, name…)
- Navigation to product detail

** Product detail
- Full product information
- Image
- Price
- Stock
- Add to cart

** Cart
- View added products
- Increase / decrease quantity
- Remove items
- Clear cart
- Automatic total calculation

** Admin panel
- Create new products
- Update stock
- Delete products
- Full product overview

* Project structure
src/
├── controllers/
├── db/
├── views/
│   ├── partials/
│   ├── products.ejs
│   ├── product-detail.ejs
│   ├── cart.ejs
│   ├── admin.ejs
│   └── index.ejs
├── public/
│   ├── images/
│   ├── js/
│   └── styles/
├── database/
│   └── init.sql
└── index.js 

* Database
This project uses MySQL.

Example products table:

CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  description TEXT NOT NULL,
  price DECIMAL(10,2),
  category VARCHAR(100),
  stock INT,
  image VARCHAR(255)
);

This project includes a pre-filled database with sample products.

To load the data:

1. Create your database:
CREATE DATABASE my_shop;

2. Import the file located at:
/database/init.sql

You can do it in two ways:

Option A – MySQL Workbench
- Open MySQL Workbench
- Select your database
- Open init.sql
- Run the script

Option B – Terminal
mysql -u your_user -p my_shop < database/init.sql

* Environment variables
Create a .env file in the root:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=my_shop

⚠️ This file is ignored in .gitignore.

* Run the project
1. Clone the repository  
git clone https://github.com/your-username/your-repo.git  

2. Install dependencies  
npm install  

3. Start the server  
npm run dev  

4. Open in your browser:  
http://localhost:3000  

* Images
    - Images are not uploaded through the form.  
    They are stored as paths in the database:  
    /images/product.png  

    - And served from:  
    public/images/  

⚠️ Make sure all images referenced in the database exist in:  
/public/images  

* Technical decisions
- Server-side rendering with EJS  
- Styling with SCSS + BEM methodology  
- Controller-based architecture  
- Clear separation between views, logic, and data  
- Use of query parameters for filtering and sorting  

* Future improvements
- Image upload from admin panel  
- Authentication system  
- User-based cart persistence  
- Animations and microinteractions  
- Production deployment  

* Author
Project developed by:  
Cristina Rodríguez Nogueiras  
@camisetadecolores  

✨✨✨ This is NOT a shop… but almost ✨✨✨