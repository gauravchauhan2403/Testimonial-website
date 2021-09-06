import React from 'react'
import User from './User'

// component for checking the fetching status and then returning the output.
const Testimonial = ({ items, isLoading, itemCount }) => {
  const item = items[itemCount];
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      {
       <User item={item} />}
    </div>
  )
}

export default Testimonial