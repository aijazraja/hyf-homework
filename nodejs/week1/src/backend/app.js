const express = require("express");
const app = express();

// import data here
const meals = require("./data/meals");
const reservations = require("./data/reservations");
const reviews = require("./data/reviews");

// this is where you will be adding your routes
app.get("/", async (request, response) => {
  response.send("Meal Sharing Web App");
});

/* 
/meals
Respond with the json for all the meals. For each meal, if there are reviews matching it's meal ID, 
add these reviews to each meal in the form of an array. For meals that do not have any reviews,
the "reviews" property will be an empty array. (watch the GIF below to understand how it should be 
structured)
*/

const copiedMeals = meals;
const mealsWithReviews = copiedMeals.map((meal) => {
  meal.reviews = reviews.filter((review) => review.mealId === meal.id);
  return meal;
});

app.get("/meals", async (request, response) => {
  response.send(mealsWithReviews);
});

/* 
/cheap-meals
Respond with the json for all the meals (including it's reviews) that are cheap 
(you define what a cheap meal is)
*/

app.get("/cheap-meals", async (request, response) => {
  const cheapMeals = mealsWithReviews.filter((oneMeal) => oneMeal.price <= 60);
  response.send(cheapMeals);
});

/* 
/large-meals
 Respond with the json for all the meals (including it's reviews) that can fit lots of people
*/

app.get("/large-meals", async (request, response) => {
  const maxFitMeals = mealsWithReviews.filter(
    (oneMeal) => oneMeal.maxNumberOfGuests >= 4
  );
  response.send(maxFitMeals);
});

/* 
/meal
Respond with the json for a random meal (including it's reviews)
*/
app.get("/meal", async (request, response) => {
  const randomMeals = mealsWithReviews[Math.floor(Math.random() * mealsWithReviews.length)];
  response.send(randomMeals);
});

/* 
/reservations
Respond with the json for all reservations
*/

app.get("/reservations", async (request, response) => {
  response.send(reservations);
});

/* 
/reservation
Respond with the json for a random reservation
*/

app.get("/reservation", async (request, response) => {
  const randomReservations = reservations[Math.floor(Math.random() * reservations.length)];
  response.send(randomReservations);
});

module.exports = app;
