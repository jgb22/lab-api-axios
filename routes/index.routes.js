const express = require('express')
const router = express.Router()
const axios = require('axios')

/* GET home page */
router.get('/', (req, res, next) => {
	res.render('index')
})

//ITERATION 3
//GET route for searching for 1 character
router.get('/all', (req, res, next) => {
	axios.get("http://localhost:8000/characters")
	.then(result => {
		const characters = result.data
		res.render("index", {characters})
	})
	.catch(err => {
		console.log(err)
	})
})

//ITERATION 4
//GET route for searching for 1 character
router.get('/search', (req, res, next) => {
	//Write code here
})

//ITERATION 5
//POST route for deleting 1 character
router.post('/search/delete', (req, res, next) => {
	//Write code here
})

//ITERATION 6
//POST route for creating a new character
router.post('/search/new-character', (req, res, next) => {
	//Write code here
})

//ITERATION 7
//POST route for editing 1 character
router.post('/search/edit', (req, res, next) => {
	//Write code here
})

module.exports = router
