DROP DATABASE IF EXISTS checkOut;

CREATE DATABASE checkOut;

USE checkOut;

CREATE TABLE customer (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(250),
  email VARCHAR(250),
  password VARCHAR(250),
  address VARCHAR(250),
  phone BIGINT NOT NULL,
  card_number BIGINT NOT NULL,
  expiry INT NOT NULL,
  cvv INT NOT NULL,
  zipcode INT NOT NULL,
  PRIMARY KEY(id)
);

