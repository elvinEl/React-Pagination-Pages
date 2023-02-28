import React from 'react'


function user({ user }) {
  return (
    <div className='userContainer'>
      <img src={user.picture.large} alt="" />
      <p>{`Full name: ${user.name.first} ${user.name.last}`}</p>
      <p>{`Phone: ${user.phone}`}</p>
    </div>
  )
}

export default user