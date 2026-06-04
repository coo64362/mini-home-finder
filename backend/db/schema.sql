CREATE DATABASE IF NOT EXISTS mini_home_finder;

USE mini_home_finder;

CREATE TABLE IF NOT EXISTS properties (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  city VARCHAR(100) NOT NULL,
  state VARCHAR(50) NOT NULL,
  zip VARCHAR(20) NOT NULL,
  price INT NOT NULL,
  beds INT NOT NULL,
  baths DECIMAL(3,1) NOT NULL,
  square_feet INT,
  image_url VARCHAR(500),
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);