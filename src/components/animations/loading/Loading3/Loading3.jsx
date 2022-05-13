import React from 'react'
import './estilo.css'

function Loading3({width='195px',height='195px'}) {
  return (

			<div 
			style={{width:width,height:height}}
			className="cssload-loader">
			<div className="cssload-square cssload-square--main">
					<div className="cssload-square cssload-square--mini"></div>
					<div className="cssload-square cssload-square--mini"></div>
					<div className="cssload-square cssload-square--mini"></div>
					<div className="cssload-square cssload-square--mini"></div>
					<div className="cssload-square cssload-square--mini"></div>
					<div className="cssload-square cssload-square--mini"></div>
					<div className="cssload-square cssload-square--mini"></div>
					<div className="cssload-square cssload-square--mini"></div>
					<div className="cssload-square cssload-square--mini"></div>
					<div className="cssload-square cssload-square--mini"></div>
					<div className="cssload-square cssload-square--mini"></div>
					<div className="cssload-square cssload-square--mini"></div>
					<div className="cssload-square cssload-square--mini"></div>
					<div className="cssload-square cssload-square--mini"></div>
					<div className="cssload-square cssload-square--mini"></div>
					<div className="cssload-square cssload-square--mini"></div>
			</div>
		</div>

  )
}

export default Loading3