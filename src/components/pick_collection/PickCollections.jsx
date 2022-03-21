import React from 'react';
import SingleCollection from './SingleCollection';

function PickCollections({setcoleccion}) {
  return <div>
      <SingleCollection color1='hotpink' onClick={()=>setcoleccion(0)} name='Nakas'/>
      <SingleCollection color1='navy' onClick={()=>setcoleccion(1)} name='Heroes Insigne'/>
      <SingleCollection color1='green' onClick={()=>setcoleccion(2)} name='Crazy Chili'/>
      <SingleCollection color1='purple' onClick={()=>setcoleccion(3)} name='Beke Valero'/>
      <SingleCollection color1='olive' onClick={()=>setcoleccion(4)} name='Chester'/>

  </div>;
}

export default PickCollections;
