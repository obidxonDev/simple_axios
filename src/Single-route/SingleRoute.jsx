import React from 'react'
import { useLocation } from 'react-router-dom';

function SingleRoute() {
  const user = useLocation()?.state
  return (
    <div>
      <p>{user.name}</p>
    </div>
  )
}

export default SingleRoute