CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  password_digest TEXT NOT NULL,
  email VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS user_states (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  state_id VARCHAR(255)
);