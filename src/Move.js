import React from 'react'

function Move({moveHandler,index, history}) {
  return (
    <>
    <li onClick={()=>{moveHandler(index); history.slice(1,(index-1))}}>go back</li>
    </>
  )
}

export default Move