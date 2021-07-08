const express = require("express")
const inventoryRouter = express.Router()
const Crud = require("../models/inventory")

inventoryRouter.route("/")
    .get((req, res, next) => {
        Crud.find((err, items) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(items)
        })
    })

inventoryRouter.get("/:crudId", (req, res, next) => {
    Crud.findById({_id: req.params.crudId}, (err, findItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(findItem)
    })
})


inventoryRouter.post("/", (req, res, next) => {
    const newItem = new Crud(req.body)
    newItem.save((err, savedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedItem)
    })
})

inventoryRouter.delete("/:crudId", (req, res, next) => {
    Crud.findOneAndDelete({_id: req.params.crudId}, (err, deleteItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Success! You deleted ${deleteItem.name} from the DB`)
    })
})

inventoryRouter.put("/:crudId", (req, res, next) => {
    Crud.findOneAndUpdate(
        {_id: req.params.crudId},
        req.body,
        {new: true},
        (err, updateItem) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(updateItem)
        }
    )
})

    module.exports = inventoryRouter