CREATE DATABASE APIS2;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    email TEXT
)