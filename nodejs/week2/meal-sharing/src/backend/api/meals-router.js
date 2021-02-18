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
    if(request.query.maxPrice){
      const maximumPrice=parseInt(request.query.maxPrice) > 0 ? parseInt(request.query.maxPrice) : 0;
      if(maximumPrice>0){
        const mealsWithMaxPrice=meals.filter((oneMeal)=>oneMeal.price<=maximumPrice);
        response.json(mealsWithMaxPrice);
      }else
       response.send("Invalid max price");
      
    }else if(request.query.title){
      
      const titleOfMeal=request.query.title.toLowerCase();
      if(titleOfMeal!=''){
        const mealWithTitle=meals.filter(oneMeal=>oneMeal.title.toLowerCase().includes(titleOfMeal));
        response.json(mealWithTitle);
      }else
        response.send('title is empty')
      

    }else if(request.query.createdAfter){
      const dateOfMeals=new Date(request.query.createdAfter);
      if(!isNaN(dateOfMeals)) {
        const mealsWithMaxDate= meals.filter(oneMeal=>new Date(oneMeal.createdAt)>dateOfMeals);
         response.json(mealsWithMaxDate);

      }else
       response.send('Invalid date');
    } else if(request.query.limit)
    {
      const limitOfMeals=parseInt(request.query.limit);
      if(limitOfMeals>0){
        const mealsWithLimit=meals.slice(0,limitOfMeals);
        response.json(mealsWithLimit);
      }else
      response.send('Invalid limit');
      
    }
    else
    response.json(meals);

  } catch (error) {
    throw error;
  }
});

module.exports = router;
