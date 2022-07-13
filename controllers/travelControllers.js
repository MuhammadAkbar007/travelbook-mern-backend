const Travel = require('../models/Travel.model')

const getAllTravels = async (req, res) => {
    try {
        const travels = await Travel.find()
        res.status(200).json({
            message: 'success',
            travels: travels.reverse()
        })
    } catch(err) {
        console.log(err)
        res.send(err)
    }
}

const getTravelById = async (req, res) => {
    try {
        const travel = await Travel.findById(req.params.id)
        
        if(!travel) {
            return res.status(404).json({
                message: 'Not found'
            })
        }
        
        return res.status(200).json({
            message: 'success',
            travel
        })
    } catch(err) {
        console.log(err)
        res.send(err)
    }
}

const addTravel = async (req, res) => {
    try {
        const { title, image, descr } = req.body
        const newTravel = await Travel.create({ title, image, descr })

        res.status(201).json({
            message: 'success',
            newTravel
        })
    } catch(err) {
        console.log(err)
        res.send(err)
    }
}

const editTravel = async (req, res) => {
    try {
        const { title, image, descr } = req.body
        const updatedTravel = await Travel.findByIdAndUpdate(req.params.id, { title, image, descr })

        res.status(200).json({
            message: 'success',
            updatedTravel
        })
    } catch(err) {
        console.log(err)
        res.send(err)
    }
}

const deleteTravel = async (req, res) => {
    try {
        await Travel.findByIdAndRemove(req.params.id)

        res.status(200).json({
            message: 'deleted'
        })
    } catch(err) {
        console.log(err)
        res.send(err)
    }
}

module.exports = { getAllTravels, getTravelById, addTravel, editTravel, deleteTravel }