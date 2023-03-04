import React from 'react'
import { useLocation } from 'react-router-dom';

function SingleRoute() {
  const user = useLocation()?.state
  return (
    <div>
      <p>name: {user.name}</p>
      <p>nick: {user.username}</p>
      <p>user-email: {user.email}</p>
      <p>adress: {user.address.street}</p>
      <p>work: {user.company.name}</p>
      <p>zipcode: {user.address.zipcode}</p>
    </div>
  )
}

export default SingleRoute