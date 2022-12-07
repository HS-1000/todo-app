SHOW DATABASES;
use kdt;

CREATE TABLE todo (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(100) NOT NULL,
  done TINYINT NOT NULL DEFAULT 0
);

INSERT INTO todo(title, done) VALUES ('hs todo1', 0);
INSERT INTO todo(title, done) VALUES ('hs todo2', 0);
INSERT INTO todo(title, done) VALUES ('hs todo3', 1);
INSERT INTO todo(title, done) VALUES ('hs todo4', 0);
INSERT INTO todo(title, done) VALUES ('hs todo5', 1);
INSERT INTO todo(title, done) VALUES ('hs todo6', 0);
