const express = require("express")
const bountyRoute = express.Router()
//const { v4: uuidv4 } = require('uuid');
const Bounty = require("../models/bounty")



// const bounties = [
//     { 
//         firstName: "Luke", 
//         lastName: "Skywalker",
//         isLiving: true,
//         bounty: 1500,
//         type: "Jedi",
//         _id: uuidv4()
//     },
//     { 
//         firstName: "Darth", 
//         lastName: "Vader",
//         isLiving: true,
//         bounty: 2000,
//         type: "Sith",
//         _id: uuidv4()
//     },
//     { 
//         firstName: "Obi-Wan", 
//         lastName: "Kenobi",
//         isLiving: true,
//         bounty: 1000,
//         type: "Jedi",
//         _id: uuidv4()
//     },
//     { 
//         firstName: "Darth", 
//         lastName: "Maul",
//         isLiving: true,
//         bounty: 700,
//         type: "Sith",
//         _id: uuidv4()
//     }

// ]

bountyRoute.route("/")
    .get((req, res, next) => {
        Bounty.find((err, bounties) => {
            if(err){
               res.status(500)
               return next (err) 
            }
            return res.status(200).send(bounties)
        })
        // res.status(200)
        // res.send(bounties)
    })





// bountyRoute.get("/:bountyId", (req, res, next) => {
//     const bountyId = req.params.bountyId
//     const foundBounty = bounties.find(bounty => bounty._id === bountyId)
//     if(!foundBounty){
//         const error = new Error(`Cannont find Bounty with ID ${bountyId}`)
//         res.status(500)
//         return next(error)

//     }
//     res.status(200).send(foundBounty) 
// })

bountyRoute.get("/search/type", (req, res, next) => {
    Bounty.find({ type: req.query.type }, (err, bounties) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounties)
    })
})

bountyRoute.post("/",(req, res, next) => {
    const newBounty = new Bounty(req.body)
    newBounty.save((err, savedBounty) => {
        if(err){
            res.status(500)
            return next(err)
        }
        res.status(201).send(savedBounty)
    })
        // const newBounty = req.body
        // newBounty._id = uuidv4()
        // bounties.push(newBounty)
        // res.status(201).send(newBounty)
    })

bountyRoute.delete("/:bountyId", (req, res, next) => {
    Bounty.findOneAndDelete({_id: req.params.bountyId},(err, deletedBounty) => {
        if(err){
            res.status(500)
            return next(err)
        }
        res.status(200).send(`Successfully deleted ${deletedBounty.firstName} ${deletedBounty.lastName} from the Database`)

    })
    // const bountyId = req.params.bountyId
    // const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    // bounties.splice(bountyIndex, 1)
    // res.send("Successfully deleted bounty")
})

bountyRoute.put("/:bountyId", (req, res, next) => {
    Bounty.findOneAndUpdate(
        {_id: req.params.bountyId}, //find this one to update
        req.body, // update object with this data
        { new: true },  // send back the updated version
        (err, updatedBounty) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedBounty)
        }

    )
    // const bountyId = req.params.bountyId
    // const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    // const updatedBounty = Object.assign(bounties[bountyIndex], req.body)
    // res.status(201).send(updatedBounty)
})



    module.exports = bountyRoute