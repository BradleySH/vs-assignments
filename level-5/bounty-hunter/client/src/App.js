import React, {useState, useEffect} from "react"
import './App.css';
import Bounties from "./Bounties"
import BountyForm from "./BountyForm"
import axios from "axios"
import BGImage from "./BGImage"

function App() {
  const [bounties, setBounties] = useState([])

  function getBounties() {
    axios.get("/bounties")
    .then(res => setBounties(res.data))
    .catch(err => console.log(err.response.data.errMsg))

  }
  //  need to add props to be able to send this data to the BountyForm 
  function addBounty(newBounty) {
    axios.post("/bounties", newBounty)
    .then(res => {
      setBounties(prevBounties => [...prevBounties, res.data])
    })
    .catch(err => console.log(err))

  }

  function deleteBounty(bountyId){
    axios.delete(`/bounties/${bountyId}`)
    .then(res => {
      setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId))
    })
    .catch(err => console.log(err))
  }

  function editBounty(updates, bountyId){
    axios.put(`/bounties/${bountyId}`, updates)
    .then(res => {
      setBounties(prevBounties => prevBounties.map(bounty => bounty._id !== bountyId ? bounty : res.data))
    })
    .catch(err => console.log(err))
  }

  function handleFilter(e){
    if(e.target.value === "reset"){
      getBounties()
    } else {
    axios.get(`/bounties/search/type?type=${e.target.value}`)
    .then(res => setBounties(res.data))
    .catch(err => console.log(err))
    } 
  }



  useEffect(() => {
    getBounties()
  },[])


  return (
    <div className="bounty-container">
      <BGImage />
      <h1>Bounty Hunter</h1>
      <BountyForm
      submit={addBounty}
      btnText="Post Bounty"
      />

      <h4 className="filter-title">Filter by Type</h4>
      <select onChange={handleFilter} className="filter-form">
        <option value="reset">- BountyList -</option>
        <option value="Jedi">Jedi</option>
        <option value="Sith">Sith</option>
        <option value="Humanoid">Humanoid</option>
      </select>


      { bounties.map(bounty => 
        <Bounties 
          {...bounty} 
          key={bounty.lastName}
          deleteBounty={deleteBounty} 
          editBounty={editBounty}
        />)}

      
    </div>
  );
}

export default App;
