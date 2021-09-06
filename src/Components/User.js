import React from 'react'

//User component
const User = ({item}) => {
  return (
    <div className='user'>
      <img className='img' alt={item.name} src={item.avatar} />
      <div className='description'>
        <p>{item.lorem}</p>
        <p>{item.message}</p>
      </div>
      <h3 className="name">{item.name}</h3>
      <h5>{item.designation}</h5>
      <h5>{item.location}</h5>
      <h5>Rating:: {item.rating}/5</h5>
    </div>
  )
}

export default User
