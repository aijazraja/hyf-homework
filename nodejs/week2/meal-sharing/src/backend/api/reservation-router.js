const express = require("express");
const router = express.Router();

const reservations = require("./../data/reservations.json");

router.get("/:id", async (request, response) => {
    const reservId=parseInt(request.params.id);
    try {
  
      const reservWithId=reservations.filter((oneReserv)=>oneReserv.id===reservId);
     /*console.log(meals);
      console.log("in /api/meals"); */
      response.send(reservWithId);
  
    } catch (error) {
      throw error;
    }
  });


router.get("/", async (request, response) => {
  try {

    response.send(reservations);

  } catch (error) {
    throw error;
  }
});

module.exports = router;