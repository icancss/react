import React from 'react'

function Person({personInfo}) {
  //get data from props object
  return (
    <div className='person-container'>
      <h2>PERSON</h2>
      <img id="avatar" src={personInfo.avatar} alt="person-avatar" />
      <ul style={{listStyleType: "none"}}> 
        <li>Firstname: {personInfo.first_name}</li>
        <li>Lastname: {personInfo.last_name}</li>
        <li>Address: {personInfo.address}</li>
        <li>Salary: {personInfo.salary}</li>
        <li>Gender: {personInfo.gender}</li>
        <li>Email: {personInfo.email}</li>
      </ul>
    </div>
  )
}

export default Person;