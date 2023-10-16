import React from 'react'
import './NextPage.css'
const NextPage = ({ onClick, navigateto })=> {
  return (
    <div className='next-page'>
      <button onClick={() => onClick(navigateto)}>Next Page</button>
    </div>
  )
}

export default NextPage
