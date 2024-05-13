import React from 'react'

const Square = (props) => {
  return (
    <div 
    onClick={props.onClick}
    style={{border:'1px solid black'
    ,height:'80px',
    width:'40%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
    }}
    className='squre'>
      <h5>{props.value}</h5>
    </div>
  )
}

export default Square
