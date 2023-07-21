import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/App.css'

function Title(props) {
  return (
    <div className='title-div'>
      <Link className='link' to={props.path}>
        <h2 className='title'>{props.artist}</h2>
        <h3 className='subtitle'>О художнике</h3>
      </Link>
    </div>
  )
}

export default Title