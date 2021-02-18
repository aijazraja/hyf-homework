const express = require("express");
const router = express.Router();

const reviews = require("./../data/reviews.json");


router.get("/:id", async (request, response) => {
  try {

      const reviewId=parseInt(request.params.id);
      const reviewsWithId=reviews.filter(oneReview=>oneReview.id===reviewId);

    response.send(reviewsWithId);

  } catch (error) {
    throw error;
  }
});

router.get("/", async (request, response) => {
    try {
  
      response.send(reviews);
  
    } catch (error) {
      throw error;
    }
  });

module.exports = router;