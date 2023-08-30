
CREATE DATABASE login_db;
USE login_db;

CREATE TABLE usuarios (
 id       INT AUTO_INCREMENT PRIMARY KEY,
 username VARCHAR(255) NOT NULL,
 password VARCHAR(255) NOT NULL
);
INSERT INTO usuarios (username, password) VALUES ('teste', 'senha123')