import React from 'react'
import './estilo.css'
import Bitcoin from '../../../image/bitcoin_1.png'
import Hashi from '../../../image/hashi_1.png'


function Loading1({width='300px',height='300px',
color3='red',bitcoin=true,image=true,
display='block',color1='pink',color2='green'}) {
    return (
<div style={{width:width,height:height,display:display}}
 className="cssload-loader">
	 
	<div style={{borderBottom:'8px solid '+color2}}
	 className="cssload-inner cssload-one">
		 
	 </div>
	<div style={{borderRight:'5px solid '+color1,}}
	className="cssload-inner cssload-two">
		
	</div>
	<div style={{borderRight:'5px solid '+color3,}}
	 className="cssload-inner cssload-three">
		 {/* <h2>{text}</h2> */}
		 {image&&<img src={bitcoin?Bitcoin:Hashi} width='25%' />}
	 </div>
	 
</div>
    )
}

export default Loading1
