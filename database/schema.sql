CREATE DATABASE online_store;
USE online_store;

CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(150) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  category VARCHAR(100) NOT NULL,
  stock INT NOT NULL
);

CREATE TABLE cart (
  id INT AUTO_INCREMENT PRIMARY KEY,
  quantity INT NOT NULL,
  product_id INT NOT NULL,
  FOREIGN KEY (product_id) REFERENCES products(id)
);