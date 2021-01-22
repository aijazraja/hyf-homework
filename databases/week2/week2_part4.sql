
-- -----------------------------------------------------
-- Table Movies
-- -----------------------------------------------------
CREATE TABLE Movies (
  id INT NOT NULL AUTO_INCREMENT,
  Title VARCHAR(85) NOT NULL,
  Relased_year INT NOT NULL,
  Image_url VARCHAR(45) ,
  Description TEXT(200),
  PRIMARY KEY (`id`)
  );
  
  
-- -----------------------------------------------------
-- Table Directors
-- -----------------------------------------------------
CREATE TABLE Directors (
  id INT NOT NULL AUTO_INCREMENT,
  Name VARCHAR(45) NOT NULL,
  About TEXT(50) NULL,
  PRIMARY KEY (`id`)
  );
  
-- -----------------------------------------------------
-- Table Stars
-- -----------------------------------------------------
CREATE TABLE Stars (
  id INT NOT NULL AUTO_INCREMENT,
  Name VARCHAR(45) NOT NULL,
  About TEXT(100) NULL,
  PRIMARY KEY (`id`)
  );
  
-- -----------------------------------------------------
-- Table Movies_Directors
-- -----------------------------------------------------
CREATE TABLE Movies_Directors (
  Movies_id INT NOT NULL,
  Directors_id INT NOT NULL,
  PRIMARY KEY (Movies_id, Directors_id),
  FOREIGN KEY (Movies_id) REFERENCES Movies(id),
  FOREIGN KEY (Directors_id)REFERENCES Directors(id)
  );
  
-- -----------------------------------------------------
-- Table Movies_Stars
-- -----------------------------------------------------
CREATE TABLE Movies_Stars(
  Movies_id INT NOT NULL,
  Stars_id INT NOT NULL,
  PRIMARY KEY (Movies_id, Stars_id),
  FOREIGN KEY (Movies_id) REFERENCES Movies(id),
  FOREIGN KEY (Stars_id) REFERENCES Stars(id)
  );

