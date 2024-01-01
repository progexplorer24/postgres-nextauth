CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  name VARCHAR(255),
  username VARCHAR(255)
);

INSERT INTO users (email, name, username) VALUES 
('root@elearning.baf.com', 'root', 'root'),
('arnold.hollywood@elearning.baf.com', 'Arnold Hollywood', 'ahollywood'),
('annie.city@elearning.baf.com', 'Annie City', 'acity'),
('marco.smith@elearning.baf.com', 'Marco Smith', 'msmith'),
('rudolf.mikie@elearning.baf.com', 'Rudolf Mikie', 'rmikie'),
('barby.oliver@elearning.baf.com', 'Barby Oliver', 'boliver'),
('james.freeman@elearning.baf.com', 'James Freeman', 'jfreeman'),
('alice.johnson@elearning.baf.com', 'Alice Johnson', 'ajohnson'),
('bob.smith@elearning.baf.com', 'Bob Smith', 'bsmith'),
('carol.white@elearning.baf.com', 'Carol White', 'cwhite');