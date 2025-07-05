DROP TABLE IF EXISTS fact_sales CASCADE;
DROP TABLE IF EXISTS dim_date CASCADE;
DROP TABLE IF EXISTS dim_customer CASCADE;
DROP TABLE IF EXISTS dim_product CASCADE;
DROP TABLE IF EXISTS dim_ship_mode CASCADE;

-- Dimensi Tanggal
CREATE TABLE dim_date (
    date_key INT PRIMARY KEY,       
    full_date DATE NOT NULL,
    day_of_week VARCHAR(10),
    month INT,
    quarter INT,
    year INT
);

-- Dimensi Customer
CREATE TABLE dim_customer (
    customer_key SERIAL PRIMARY KEY,
    customer_id TEXT UNIQUE NOT NULL,
    customer_name TEXT,
    segment TEXT,
    country TEXT,
    city TEXT,
    state TEXT,
    postal_code TEXT,
    region TEXT,
    latitude DOUBLE PRECISION,
    longitude DOUBLE PRECISION
);

-- Dimensi Produk
CREATE TABLE dim_product (
    product_key SERIAL PRIMARY KEY,
    product_id TEXT UNIQUE NOT NULL,
    product_name TEXT,
    category TEXT,
    sub_category TEXT
);

-- Dimensi Ship Mode
CREATE TABLE dim_ship_mode (
    ship_mode_key SERIAL PRIMARY KEY,
    ship_mode TEXT UNIQUE NOT NULL
);

-- Fakta Penjualan
CREATE TABLE fact_sales (
    order_id TEXT PRIMARY KEY,
    order_date_key INT NOT NULL,
    ship_date_key INT NOT NULL,
    customer_key INT NOT NULL,
    product_key INT NOT NULL,
    ship_mode_key INT NOT NULL,
    sales NUMERIC,
    quantity INTEGER,
    discount NUMERIC,
    profit NUMERIC,
    FOREIGN KEY (order_date_key) REFERENCES dim_date(date_key),
    FOREIGN KEY (ship_date_key) REFERENCES dim_date(date_key),
    FOREIGN KEY (customer_key) REFERENCES dim_customer(customer_key),
    FOREIGN KEY (product_key) REFERENCES dim_product(product_key),
    FOREIGN KEY (ship_mode_key) REFERENCES dim_ship_mode(ship_mode_key)
);
