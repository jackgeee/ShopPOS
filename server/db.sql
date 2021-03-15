
CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,
    product_name VARCHAR(50),
    product_description VARCHAR(50),
    product_price DECIMAL(4, 2)
);

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    user_name VARCHAR(50),
    user_password VARCHAR(50),
    user_email VARCHAR(100)
);