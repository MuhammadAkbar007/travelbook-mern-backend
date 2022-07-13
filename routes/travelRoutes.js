const { Router } = require('express')
const router = Router()
const { getAllTravels, getTravelById, addTravel, editTravel, deleteTravel } = require('../controllers/travelControllers')

router.get('/', getAllTravels)
router.get('/:id', getTravelById)
router.post('/add', addTravel)
router.put('/update/:id', editTravel)
router.delete('/:id', deleteTravel)

module.exports = router