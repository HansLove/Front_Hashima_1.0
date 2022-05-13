import React from 'react';
import styled from 'styled-components';
// import './estilo.css'

function Loading2({
  height='109px',
  width='94px'
}) {

  const Div=styled.div`
      margin: auto;
      width: 50%;
      transform: translate(-109px, -94px);


.cssload-tetromino {
	position: absolute;
	transition: all ease 0.35s;
	background: url('data:image/svg+xml;utf-8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 684"%3E%3Cpath fill="%23010101" d="M305.7 0L0 170.9v342.3L305.7 684 612 513.2V170.9L305.7 0z"/%3E%3Cpath fill="%23fff" d="M305.7 80.1l-233.6 131 233.6 131 234.2-131-234.2-131"/%3E%3C/svg%3E') no-repeat top center;
}

.cssload-box1 {
	animation: cssload-tetromino1 1.73s ease-out infinite;
}

.cssload-box2 {
	animation: cssload-tetromino2 1.73s ease-out infinite;
}

.cssload-box3 {
	animation: cssload-tetromino3 1.73s ease-out infinite;
	z-index: 2;
}

.cssload-box4 {
	animation: cssload-tetromino4 1.73s ease-out infinite;
}

@keyframes cssload-tetromino1 {
	0%, 40% {
		transform: translate(0, 0);
	}
	50% {
		transform: translate(47px, -26px);
	}
	60%, 100% {
		transform: translate(94px, 0);
	}
}

@keyframes cssload-tetromino2 {
	0%, 20% {
		transform: translate(94px, 0px);
	}
	40%, 100% {
		transform: translate(140px, 26px);
	}
}

@keyframes cssload-tetromino3 {
	0% {
		transform: translate(140px, 26px);
	}
	20%, 60% {
		transform: translate(94px, 53px);
	}
	90%, 100% {
		transform: translate(47px, 26px);
	}
}

@keyframes cssload-tetromino4 {
	0%, 60% {
		transform: translate(47px, 26px);
	}
	90%, 100% {
		transform: translate(0, 0);
	}
}
  `
  return <Div>
  <div style={{height:height,width:width}} class="cssload-tetromino cssload-box1"></div>
  <div style={{height:height,width:width}} class="cssload-tetromino cssload-box2"></div>
  <div style={{height:height,width:width}} class="cssload-tetromino cssload-box3"></div>
  <div style={{height:height,width:width}} class="cssload-tetromino cssload-box4"></div>
</Div>
}

export default Loading2;
