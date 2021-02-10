const express = require("express");
const router = express.Router();

const meals = require("./../data/meals.json");

router.get("/:id", async (request, response) => {
  const mealId=parseInt(request.params.id);
  try {

    const mealsWithId=meals.filter((oneMeal)=>oneMeal.id===mealId);
    response.send(mealsWithId);

  } catch (error) {
    throw error;
  }
});


/* ---------------------/meals Parameters-------------- */

router.get("/", async (request, response) => {
  
  try {

    response.send(meals); 
    //Showing all meals, plese uncomment down to see different meal options.
 
    const mxPrice=parseInt(request.query.maxPrice) > 0 ? parseInt(request.query.maxPrice) : 0;
    const mealsWithMaxPrice=meals.filter((oneMeal)=>oneMeal.price<=mxPrice);
    //response.json(mealsWithMaxPrice);


    /* 

    const titleofMeal=request.query.title.toLowerCase();
    const mealWithTitle=meals.filter(oneMeal=>oneMeal.title.toLowerCase().includes(titleofMeal));
    response.json(mealWithTitle);

    */
    

    const dateOfMeals=new Date(request.query.createdAfter);
    const mealsWithMaxDate= meals.filter(oneMeal=>new Date(oneMeal.createdAt)>dateOfMeals);
    //response.json(mealsWithMaxDate)


    const limit1=parseInt(request.query.limit);
    const mealsWithLimit=meals.slice(0,limit1);
    //response.json(mealsWithLimit);

  } catch (error) {
    throw error;
  }
});

module.exports = router;
