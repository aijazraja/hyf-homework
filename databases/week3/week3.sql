										-- Data Model --
 
-- Meal Table

CREATE TABLE meal(
  id INT NOT NULL AUTO_INCREMENT,
  tittle VARCHAR(45) NOT NULL,
  description TEXT ,
  location VARCHAR(45) ,
  whenn  datetime ,
  max_reservations INT NOT NULL,
  price DECIMAL NOT NULL,
  created_date DATE ,
  PRIMARY KEY (`id`));
   
   -- Queries
   
 -- Get all meals
 
 SELECT 
    *
FROM
    meal;
 
 -- Add  new meals
 
 INSERT INTO meal (`tittle`, `description`, `location`, `whenn`, `max_reservations`, `price`, `created_date`) 
 VALUES ('PIZZA', 'medium hot and spicy', 'hvidovre', '2021-02-20 19:00:00', 1, 69, '2021-02-20');
 INSERT INTO meal(`tittle`, `description`, `location`, `whenn`, `max_reservations`, `price`, `created_date`) 
 VALUES ('Indian food', 'tandoori chicken ', 'valby', '2021-02-21 20:00:00', '3', '240', '2021-02-19');
 INSERT INTO meal(`tittle`, `description`, `location`, `whenn`, `max_reservations`, `price`, `created_date`)
 VALUES ('Burger', 'copenhagen with meat(medium)', 'halifax vesterbro', '2021-02-23 19:30:00', '1', '170', '2121-02-21');
 
-- Get a meal with any id, fx 1

SELECT 
    *
FROM
    meal
WHERE
    id = 1;

-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes

UPDATE meal 
SET 
    description = 'chicken biyryani',
    location = 'Borndby',
    max_reservations = 2,
    price = 190
WHERE
    id = 2;
 
 -- Delete a meal with any id, fx 1  
 
 DELETE FROM meal 
WHERE
    id = 3;
 
 -- Reservation table
 
 CREATE TABLE reservation (
  id INT NOT NULL AUTO_INCREMENT,
  number_of_guests INT NOT NULL,
  created_date DATE ,
  contact_phonenumber VARCHAR(45) ,
  contact_name VARCHAR(45) NOT NULL ,
  contact_email VARCHAR(45) NOT NULL ,
  meal_id INT,
  PRIMARY KEY (id),
  UNIQUE (contact_email),
  FOREIGN KEY (meal_id) REFERENCES meal(id)
  );
  
  -- Queries
  
  -- Get all reservations
  
  SELECT 
    *
FROM
    reservation;
  
  -- Add a new reservation
  
  INSERT INTO reservation(`number_of_guests`, `created_date`, `contact_phonenumber`, `contact_name`, `contact_email`, `meal_id`)
  VALUES (4, '2021-02-15', '7134452', 'amir', 'amir@mail.com', 1);
  
 -- Get a reservation with any id, fx 1
 
 SELECT 
    *
FROM
    reservation
WHERE
    id = 1;
 
 -- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
 
 UPDATE reservation 
SET 
    number_of_guests = 3,
    meal_id = 2
WHERE
    id = 2;
 
 -- Delete a reservation with any id, fx 1
 
 DELETE FROM reservation 
WHERE
    id = 3;
 
 -- review Table
 
 CREATE TABLE review (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(45) ,
  description TEXT ,
  stars INT ,
  meal_id INT,
  created_date DATE,
  PRIMARY KEY (id),
  FOREIGN KEY (meal_id) REFERENCES meal(id)
    );
    
    -- Get all reviews
    
    SELECT 
    *
FROM
    review;
    
    -- 	Add a new review
    
    INSERT INTO review (`title`, `description`, `stars`, `meal_id`, `created_date`) 
    VALUES ('pizza order', 'Pizza was cold ', 2, 1, '2021-01-14');
    
    -- Get a review with any id, fx 1
    
    SELECT 
    *
FROM
    review
WHERE
    id = 1;
    
    -- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
    
    UPDATE review 
SET 
    description = 'Pizza was cold and not fresh ',
    stars = 1
WHERE
    id = 1;
    
    --  Delete a review with any id, fx 1
    
    DELETE FROM review 
WHERE
    id = 1;
    
    
                                  -- Additional queries --

 
--  Get meals that has a price smaller than a specific price fx 90

SELECT 
    *
FROM
    meal
WHERE
    price < 90;

-- Get meals that still has available reservations

SELECT 
    meal.tittle,
    COUNT(reservation.meal_id) AS number_of_reservations,
    max_reservations
FROM
    meal
        LEFT JOIN
    reservation ON reservation.meal_id = meal.id
GROUP BY meal_id
HAVING max_reservations > COUNT(reservation.meal_id);
 
 --  Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
 SELECT 
    id, tittle
FROM
    meal
WHERE
    tittle LIKE '%PIZZA%';
    
    -- Get meals that has been created between two dates
    
   SELECT 
    *
FROM
    meal
WHERE
    (created_date BETWEEN '2021-02-01 ' AND '2021-02-19');
    
    -- Get only specific number of meals fx return only 5 meals
    
 SELECT 
    *
FROM
    meal
LIMIT 3;

-- Get the meals that have good reviews

SELECT 
    meal.id, meal.tittle, review.stars AS rating
FROM
    meal
        JOIN
    review ON meal.id = review.meal_id
WHERE
    review.stars > 3;
    
-- Get reservations for a specific meal sorted by created_date

SELECT 
    reservation.id,
    reservation.contact_name,
    reservation.created_date,
    meal.tittle
FROM
    reservation
        JOIN
    meal ON meal.id = reservation.meal_id
WHERE
    reservation.meal_id = 2
ORDER BY reservation.created_date ASC;

-- Sort all meals by average number of stars in the reviews

SELECT 
    meal.*
FROM
    meal
        JOIN
    review ON meal.id = review.meal_id
GROUP BY review.meal_id
ORDER BY AVG(review.stars);
    
    