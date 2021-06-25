const express = require("express")
const bountyRoute = express.Router()
const { v4: uuidv4 } = require('uuid');



const bounties = [
    { 
        firstName: "Luke", 
        lastName: "Skywalker",
        isLiving: true,
        bounty: 1500,
        type: "Jedi",
        _id: uuidv4()
    },
    { 
        firstName: "Darth", 
        lastName: "Vader",
        isLiving: true,
        bounty: 2000,
        type: "Sith",
        _id: uuidv4()
    },
    { 
        firstName: "Obi-Wan", 
        lastName: "Kenobi",
        isLiving: true,
        bounty: 1000,
        type: "Jedi",
        _id: uuidv4()
    },
    { 
        firstName: "Darth", 
        lastName: "Maul",
        isLiving: true,
        bounty: 700,
        type: "Sith",
        _id: uuidv4()
    }

]

bountyRoute.route("/")
    .get((req, res) => {
        res.send(bounties)
    })
    .post((req, res) => {
        const newBounty = req.body
        newBounty._id = uuidv4()
        bounties.push(newBounty)
        res.send(`Successfully added ${newBounty.firstName} ${newBounty.lastName} to the bounty list`)
    })
    .delete((req, res) => {
        
    })

    module.exports = bountyRoute