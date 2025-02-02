const express = require("express");
const router = express.Router();
const axios = require("axios");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

//ITERATION 3
//GET route for searching for 1 character
router.get("/all", (req, res, next) => {
  axios
    .get("http://localhost:8000/characters")
    .then((result) => {
      const characters = result.data;
      res.render("index", { characters });
    })
    .catch((err) => {
      console.log(err);
    });
});

//ITERATION 4
//GET route for searching for 1 character
router.get("/search", (req, res, next) => {
  const { id } = req.query;
  axios
    .get(`http://localhost:8000/characters/${id}`)
    .then((result) => {
      res.render("../views/index.hbs", { characters: result.data });
    })
    .catch((err) => {
      console.log(err);
    });
});

//ITERATION 5
//POST route for deleting 1 character
router.post("/search/delete", (req, res, next) => {
  const { id } = req.body;
  axios
    .delete(`http://localhost:8000/characters/${id}`)
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
});

//ITERATION 6
//POST route for creating a new character
router.post("/search/new-character", (req, res, next) => {
  const { name, occupation, weapon, cartoon } = req.body;
  axios
    .post("http://localhost:8000/characters", {
      name,
      occupation,
      weapon,
      cartoon,
    })
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
});

// //ITERATION 7
// //POST route for editing 1 character
// router.post("/search/edit", (req, res, next) => {
//   //Write code here
// });

router.post('/search/edit', (req, res, next) => {
  const { id, name, occupation, weapon, cartoon } = req.body;
  const updatedCharacter = {
    name,
    occupation,
    weapon,
    cartoon: Boolean(cartoon), 
  };

  axios.put(`http://localhost:8000/characters/${id}`, updatedCharacter)
    .then(response => {
      res.redirect('/');
    })
    .catch(error => {
      next(error);
    });
});


module.exports = router;
