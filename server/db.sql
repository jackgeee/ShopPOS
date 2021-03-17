
CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,
    product_name VARCHAR(50),
    product_description VARCHAR(50),
    product_price DECIMAL(4, 2)
    product_image VARCHAR(100)
);

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    user_name VARCHAR(50),
    user_password VARCHAR(50),
    user_email VARCHAR(100)
);

CREATE TABLE admins (
    admin_id SERIAL PRIMARY KEY,
    admin_name VARCHAR(50),
    admin_password VARCHAR(50)
);

CREATE TABLE shopping_cart (
    product_name VARCHAR(50),
    product_id VARCHAR(10),
    quantity VARCHAR(3)
);