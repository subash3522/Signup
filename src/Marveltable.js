import React from 'react'

function Marveltable({thumbnail,name, description}) {
  return (
    <>
    <tbody>
    <tr>
        <td className='thumbnail'><img src={thumbnail+'.jpg'} alt="nothins" /></td>
        <td>{name}</td>
        <td>{description}</td>
    </tr>
    </tbody>
    
    </>
    
    
  )

}

export default Marveltable