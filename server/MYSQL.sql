CREATE TABLE food (
  id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(255) UNIQUE NOT NULL,
toGet BOOLEAN,
inBasket BOOLEAN
);

INSERT INTO food(
  name,
  toGet,
  inBasket
) VALUES (
  'Milk, Oat',
  true,
  false
);