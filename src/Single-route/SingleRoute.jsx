import React from 'react'
import { useLocation } from 'react-router-dom';

function SingleRoute() {
  const user = useLocation()?.state
  return (
    <div>
      <p>{user.name}</p>
      <p>{user.username}</p>
      <p>{user.email}</p>
      <p>{user.address.street}</p>
      <p>{user.company.name}</p>
      <p>{user.address.zipcode}</p>
    </div>
  )
}

export default SingleRoute