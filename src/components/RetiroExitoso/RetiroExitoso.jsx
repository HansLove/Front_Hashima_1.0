import React from 'react'
import '../../estilo/estilo_green.scss'

function RetiroExitoso({height='40vh'}) {
  return (
    <div style={{width:'100%',height:height}}
     className='div_estilo_green'>
      <h1 className='h1_title_green'>Hashima successfully retired</h1>

      <p style={{fontFamily:'monospace',fontSize:'1.5rem',textAlign:'center'}}>You will see your Hashima on 'Collection'</p>
      
    </div>
  )
}

export default RetiroExitoso